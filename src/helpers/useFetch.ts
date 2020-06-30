import React from 'react';
import { PROXY_URI } from '../pages/contacts/Contacts.constants';

const useFetch = (url: string) => {
  const [response, setResponse] = React.useState<any[]>([]);
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(PROXY_URI + url);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { response, error, isLoading };
};

export default useFetch;
