# useForm validation without a library
source: [useForm](https://felixgerschau.com/react-hooks-form-validation-typescript/)

## Features

- Validate user input
- Updte form data
- Handle form submission

## How to use it

```js
const {
  handleSubmit, // handles form submission
  handleChange, // handles input changes
  data, // access to the form data
  errors, // includes the errors to show
} = useForm({ // the hook we are going to create
  validations: { // all our validation rules go here
    name: {
      pattern: {
        value: '^[A-Za-z]*$',
        message:
          "You're not allowed ...",
      },
    },
  },
  onSubmit: () => alert('User submitted!'),
  initialValues: { // used to initialize the data
    name: 'John',
  },
});

// ...
return (
  <form onSubmit={handleSubmit}>
    <input value={data.name || ''} onChange={handleChange('name')} required />
    {errors.name && <p className="error">{errors.name}</p>}
    {/** ... */}
  </form>
);

```

## Adding validations

There are three ways for the greatest flexibility

- **Required**: Throws a validation error if attribute is missing
- **Pattern**: Use a *regular expression* that the attribute must match to be considered valid.
- **Custom**: Use a *custom function* that accepts the value as a parameter and which return a boolean. If `true` the field is valid.

```js
const { handleSubmit, handleChange, data, errors } = useForm({
  validations: {
    name: {
      pattern: {
        value: '^[A-Za-z]*$',
        message: "You're not allowed to...",
      },
    },
    age: {
      custom: {
        isValid: (value) => parseInt(value, 10) > 17,
        message: 'You have to be at least 18 years old.',
      },
    },
    password: {
      required: {
        value: true,
        message: 'This field is required',
      },
      custom: {
        isValid: (value) => value.length > 6,
        message: 'The password needs to be at...',
      },
    },
  },
});
```
In our handleSubmit function, we now need to add the logic for validating our keys.


## Handling errors

Once specified validation rules you can access the `errors` object to show validation errors.

```js
const { errors, data } = useForm({
  // ...
});

// ...

<form handleSubmit={handleSubmit}>
  {errors.name && <p className="error">{errors.name}</p>}
</form>
```
