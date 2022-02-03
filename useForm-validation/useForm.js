import { useState } from 'react';

export const useForm = ( options ) => {
  const [data, setData] = useState(options?.initialValues || {});

  const [errors, setErrors] = useState({});

  const handleChange = (key, sanitizeFn,) => (e) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    setData({
      ...data,
      [key]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validations = options?.validations;

    if (validations) {
      let valid = true;
      const newErrors = {};
      for (const key in validations) {
        const value = data[key]; // value fo the field we're validating
        const validation = validations[key]; // the matching rule for this key

        // REQUIRED
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }
        
        // PATTERN
        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        // CUSTOM
        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }

    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit();
    }
  }

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
  }

}
