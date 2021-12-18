import { useState } from 'react';
/**
 * initialState ==> {
 *  nombre: '',
 *  description: '',
 * }
 * 
 * return values { nombre: 'jose', description: 'datos' }
 * 
 */

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }

  // limpiar formulario
  const cleanForm = () => {
    setValues(initialState);
  }

  return [ values, handleInputChange, cleanForm ];

}
