import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    //Este retur es el cleanup del useEffect, por lo tanto, cuando se
    //desmonte el componente, sucedera lo que hay en el return
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //Aqui llamamos el componente de forma condicional! si el ref es true o false
        if (isMounted.current) {
          setState({ loading: false, error: null, data });
        }
      });
  }, [url]);
  return state;
};
export default useFetch;
