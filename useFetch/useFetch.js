import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {
  if (!url) {
    throw new Error('Provide a valid url');
  }
  
  const isMounted = useRef(true); // keep reference when mounted
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null })
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data
          })
        }
      })
      .catch( () => {
        setState({
          data: null,
          loading: false,
          error: 'Not able to load data'
        })
      })
  }, [url])

  return state
}
