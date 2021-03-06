import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setstate({ data: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          setstate({
            loading: false,
            error: null,
            data: data,
          });
        }, 3000);
      });
  }, [url]);

  return state;
};
