import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {

  if (!url) {
    throw new Error('no url');
  }
  
  const isMounted = useRef(true); // matener la referncia cuando esta montado
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    return () => {
      // hacemos que la ref sea desmontado cleanup
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
          error: 'No se pudo cargar la información'
        })
      })
  }, [url])

  return state

}
