# useForm

This hook allows to control the state of inputs in a form.

## How to use

The properties of the `initialForm` object must match the `name` attribute of the `<input/>` tag

```js
const initialForm = {
  name: '',
  email: '',
  password: '',
}

const [ values, handleInputChange, reset ] = useForm(initialForm);

// values = { name: 'abc', email: 'abc', password: 'abc' }

return (
  <form>
    <input
      value={ values.name }
      name="name"
      onChange={ handleInputChange }
      required
    />
    <input
      value={ values.email }
      name="email"
      onChange={ handleInputChange }
      required
    />
    <input
      value={ values.password }
      name="password"
      onChange={ handleInputChange }
      required
    />
    {/** ... */}
  </form>
);

```
