import { useEffect, useState } from 'react';

import { fetchHeroesAction } from '../../../store/api-actions';
import { resetHeroes } from '../../../store/catalog-data/catalog-data';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import { useAppSelector } from '../../../hooks/use-app-selector';
import { Pages } from '../../../const';
import { getHeroes, getHeroesCount, getNextQuery } from '../../../store/selectors';
import Header from '../../header/header';
import HeroesList from '../../heroes-list/heroes-list';
import Search from '../../search/search';
import './style.css';

function HeroesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const heroes = useAppSelector(getHeroes);
  const heroesCount = useAppSelector(getHeroesCount);
  const nextQuery = useAppSelector(getNextQuery)

  const [fetching, setFetching] = useState<boolean>(true);

  const handleScroll = (event: Event) => {
    const evt = event.currentTarget as Document;
    
    if ((evt.documentElement.scrollHeight - (evt.documentElement.scrollTop + window.innerHeight)) < 100) {
      setFetching(true);
    }
  };

  async function fetchOnePage(query: string | null) {
    if (query) {
      await dispatch(fetchHeroesAction(query));
      setFetching(false);
    }
    setFetching(false);
  }

  useEffect(() => {
    if (fetching) {
      fetchOnePage(nextQuery);
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      dispatch(resetHeroes());
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="heroes">
      <Header currentPage={Pages.Characters} />
      <div className="heroes__container">
        {heroes.length ?
          <>
            <h1 className="heroes__title">{heroesCount} peoples for you to choose your favorite</h1>
            <Search />
            <HeroesList heroes={heroes} /> 
          </> :
          <h2 className="heroes__loader">Loading...</h2>}
      </div>
    </div>
  );
}

export default HeroesPage;
