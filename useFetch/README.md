# useFetch

## How to use it

Provide the enpoint where to get data, this hook triggers whenever the `url` changes.

```js
const url = 'https://randomapi.com/api';
const { data, loading, error } = useFetch(url);
```