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
import styles from './heroes-page.module.css';

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
      dispatch(resetEyeColor());
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
    <div className={styles.root}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>{heroesCount} peoples for you to choose your favorite</h1>
        <Search />
        <Filter />
        {isDataLoaded && <HeroesList heroes={heroes} isContentMore={Boolean(nextQuery)} isLoading={isLoading} />}
        {!isDataLoaded && <h2 className={styles.loader}>Loading...</h2>}
      </div>
    </div>
  );
}

export default HeroesPage;
