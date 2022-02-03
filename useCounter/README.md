# useCounter

## Features

- **counter**: Current value of the counter `<Number>`
- **increment**: Increments the `counter` by `1` `<Function>`
- **decrement**: Decrements the `counter` by `1` `<Function>`
- **reset**: Sets the `counter` to `initState` `<Function>`

## How to use

If `initState` is NOT provided the default is `1`.

```js
const initState = 100; 
const {
  counter,
  increment,
  decrement,
  reset
} = useCounter(initState);
```