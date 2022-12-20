import { useEffect, useState } from 'react';

function useDebounce(value: string): string {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), 1000);

    return () => {
      clearTimeout(timer);
    }
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
