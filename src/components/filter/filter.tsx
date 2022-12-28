import { ChangeEvent } from 'react';

import { getActiveEyeColor, getEyeColors } from '../../store/selectors';
import { setEyeColor } from '../../store/catalog-filter/catalog-filter';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import styles from './filter.module.css';

function Filter(): JSX.Element {
  const dispatch = useAppDispatch();
  const eyeColors = useAppSelector(getEyeColors);
  const activeEyeColor = useAppSelector(getActiveEyeColor);
  
  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setEyeColor(evt.target.value));
  };

  return (
    <div className={styles.filter}>
      <span className={styles.title}>Eye color</span>
      <select className={styles.select} name="eyeColor" value={activeEyeColor} onChange={handleChange}>
        {eyeColors.map((color) => <option value={color} key={color}>{color}</option>)}
      </select>
    </div >
  )
}

export default Filter;
