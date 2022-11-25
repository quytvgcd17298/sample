import {useEffect, useState} from 'react';

export function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    const callApi = new Promise((resole, reject) => {
      // range 150ms < data < 1150ms
      const randomeTimeout = Math.random() * 1000 + 150;
      setTimeout(() => {
        resole(randomeTimeout);
      }, [randomeTimeout]);
    })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return {loading, data, error};
}

// - assuming we have call api sequence:
// with this fetch hook for the same url. We will have some scenario
// 1. 0ms + 150ms = 150ms
// 2. 100ms + 300ms = 400ms
// 3. 200ms + 100ms = 300ms
// - result of that sample:
// the resposne of first request will receive first
// the seccond will be last
// the third will in middle the first and the seccond
// - how to resolve this problem:
// the expect result: we only want data of the third response
// => we need cancelable mechanism
