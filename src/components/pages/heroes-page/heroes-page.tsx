import { useEffect, useState } from 'react';

import { fetchHeroesAction } from '../../../store/api-actions';
import { resetHeroes } from '../../../store/catalog-data/catalog-data';
import { resetEyeColor } from '../../../store/catalog-filter/catalog-filter';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import { useAppSelector } from '../../../hooks/use-app-selector';
import { getHeroesCount, getNextQuery, getIsDataLoaded, getHeroesByActiveEyeColor, getIsLoading } from '../../../store/selectors';
import Header from '../../header/header';
import HeroesList from '../../heroes-list/heroes-list';
import Search from '../../search/search';
import Filter from '../../filter/filter';
import './style.css';

function HeroesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const heroes = useAppSelector(getHeroesByActiveEyeColor);
  const heroesCount = useAppSelector(getHeroesCount);
  const nextQuery = useAppSelector(getNextQuery);
  const isDataLoaded = useAppSelector(getIsDataLoaded);
  const isLoading = useAppSelector(getIsLoading);

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
      dispatch(resetEyeColor());
      document.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  return (
    <div className="heroes">
      <Header />
      <div className="heroes__container">
        <h1 className="heroes__title">{heroesCount} peoples for you to choose your favorite</h1>
        <Search />
        <Filter />
        {isDataLoaded && <HeroesList heroes={heroes} isContentMore={Boolean(nextQuery)} isLoading={isLoading} />}
        {!isDataLoaded && <h2 className="heroes__loader">Loading...</h2>}
      </div>
    </div>
  );
}

export default HeroesPage;
