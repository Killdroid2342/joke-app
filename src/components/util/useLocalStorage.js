import { useEffect, useState } from 'react';

const useDynamicState = (defaultValue, key) => {
  const [value, setNumber] = useState(() => {
    const dynamic = window.localStorage.getItem(key);
    return dynamic !== null ? JSON.parse(dynamic) : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setNumber];
};

export default useDynamicState;
