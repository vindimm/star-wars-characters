import { ChangeEvent } from 'react';

import { getActiveEyeColor, getEyeColors } from '../../store/selectors';
import { setEyeColor } from '../../store/catalog-filter/catalog-filter';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import './style.css';

function Filter(): JSX.Element {
  const dispatch = useAppDispatch();
  const eyeColors = useAppSelector(getEyeColors);
  const activeEyeColor = useAppSelector(getActiveEyeColor);
  
  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setEyeColor(evt.target.value));
  };

  return (
    <div className='filter'>
      <span className="filter__title">Eye color</span>
      <select className="filter__select" name="eyeColor" value={activeEyeColor} onChange={handleChange}>
        {eyeColors.map((color) => <option value={color} key={color}>{color}</option>)}
      </select>
    </div >
  )
}

export default Filter;
