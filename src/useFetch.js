import {useState, useEffect} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abrtCont = new AbortController();

    fetch(url, {signal: abrtCont.signal})
      .then(res => {
        if (!res.ok) {
          throw Error('Error found with status: ' + res.status);
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name==="AbortError"){
          // console.log('fetch aborted');
        } else{
          setError(err.message);
          setIsPending(false);
        }
      })

      return ()=> abrtCont.abort()
  }, [url]);
  return {data, isPending, error}
}

export default useFetch;