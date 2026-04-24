import { useEffect, useState } from 'react';
import { API_URL } from '../config';

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    // задержка появления лоадера в 500ms (чтобы не мелькал при перезагрузке):
    const timer = setTimeout(() => setLoading(true), 500);

    const fetchData = async () => {
      const baseURL = API_URL + url;

      try {
        const response = await fetch(baseURL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json: T = await response.json();

        setData(json);
        setError(null);
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        clearTimeout(timer);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
