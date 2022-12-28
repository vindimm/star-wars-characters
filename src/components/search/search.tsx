import { useState, useEffect, ChangeEvent } from 'react';

import { fetchHeroesBySearchAction } from '../../store/api-actions';
import { resetHeroes } from '../../store/catalog-data/catalog-data';
import { resetEyeColor } from '../../store/catalog-filter/catalog-filter';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import useDebounce from '../../hooks/use-debounce';
import styles from './search.module.css';

function Search(): JSX.Element {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>('')
  const [isInitialRender, setIsInitialRender] = useState<boolean>(true);
  const debouncedValue = useDebounce(value);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    setIsInitialRender(false);
  };

  useEffect(() => {
    if (!isInitialRender) {
      dispatch(resetEyeColor());
      dispatch(resetHeroes());
      dispatch(fetchHeroesBySearchAction(debouncedValue));
    }
  }, [dispatch, debouncedValue]);

  return (
    <input
      className={styles.root}
      type="text"
      placeholder="find..."
      value={value}
      onChange={handleChange}
    />
  );
}

export default Search;
