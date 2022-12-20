import { useEffect } from 'react';
import { fetchHeroesByPageAction } from '../../../store/api-actions';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Pages } from '../../../const';
import { getHeroes } from '../../../store/selectors';
import Header from '../../header/header';
import HeroesList from '../../heroes-list/heroes-list';

function HeroesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const heroes = useAppSelector(getHeroes);

  console.log(heroes);
  

  useEffect(() => {
    dispatch(fetchHeroesByPageAction(1));
  }, [dispatch]);

  return (
    <>
      <Header currentPage={Pages.Characters} />
      {heroes.length ?
        <HeroesList heroes={heroes} /> :
        <h2>Loading...</h2>}
    </>
  );
}

export default HeroesPage;
