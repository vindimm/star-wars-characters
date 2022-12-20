import { useEffect } from 'react';
import { fetchCharactersAction } from '../../../store/api-actions';

import { useAppDispatch } from '../../../hooks';
import Header from '../../header/header';
import './style.css';

function HomePage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharactersAction());
    console.log(123);
    
  });

  return (
    <>
      <Header currentLink={'Home'} />
      <h1>Home Page</h1>
    </>
  );
}

export default HomePage;
