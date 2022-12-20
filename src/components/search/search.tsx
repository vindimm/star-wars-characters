import { useState, useEffect, ChangeEvent } from 'react';

import { fetchHeroesBySearchAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import useDebounce from '../../hooks/use-debounce';
import './style.css';

function Search(): JSX.Element {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce(value);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  useEffect(() => {
    dispatch(fetchHeroesBySearchAction(debouncedValue));
  }, [dispatch, debouncedValue]);

  return (
    <input
      className="search"
      type="text"
      placeholder="find..."
      value={value}
      onChange={handleChange}
    />
  );
}

export default Search;
