// import { useEffect } from 'react';
// import { fetchHeroesByPageAction } from '../../../store/api-actions';

// import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import { useAppSelector } from '../../../hooks/use-app-selector';
import { Pages } from '../../../const';
import { getHeroes, getHeroesCount } from '../../../store/selectors';
import Header from '../../header/header';
import HeroesList from '../../heroes-list/heroes-list';
import Search from '../../search/search';
import './style.css';

function HeroesPage(): JSX.Element {
  // const dispatch = useAppDispatch();
  const heroes = useAppSelector(getHeroes);
  const heroesCount = useAppSelector(getHeroesCount);

  // useEffect(() => {
  //   dispatch(fetchHeroesByPageAction(1));
  // }, [dispatch]);

  return (
    <>
      <Header currentPage={Pages.Characters} />
      <div className='heroes__container'>
        <h1 className='heroes__title'>{heroesCount} peoples for you to choose your favorite</h1>
        <Search />
        {heroes.length ?
          <HeroesList heroes={heroes} /> :
          <h2>Loading...</h2>}
      </div>
    </>
  );
}

export default HeroesPage;
