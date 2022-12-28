import { useState, MouseEvent, KeyboardEvent } from 'react';

import { Hero, Heroes } from '../../types/hero';
import HeroCard from '../hero-card/hero-card';
import Modal from '../modal/modal';
import styles from './heroes-list.module.css';

type HeroesListProps = {
  heroes: Heroes;
  isContentMore: boolean;
  isLoading: boolean;
};

function HeroesList({ heroes, isContentMore, isLoading }: HeroesListProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeHeroUrl, setActiveHeroUrl] = useState<string | null>('');

  const handleCardClick = (evt: MouseEvent<HTMLElement>) => {
    // Непосредственно элемент на котором произошел клик
    const target = evt.target as HTMLElement;

    // Если среди родителей target есть <li> с атрибутом 'data-url', то он будет записан в card, иначе card = null
    const card = target.closest('li[data-url]');

    if (card) {
      setActiveHeroUrl(card.getAttribute('data-url'));
      setIsModalOpen(true);
    }
  }

  const handleCloseModalClick = () => {
    setIsModalOpen(false);
    setActiveHeroUrl(null);
  }

  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      setIsModalOpen(false);
      setActiveHeroUrl(null);
    }
  }

  return (
    <>
      <ul className={styles.list} onClick={handleCardClick}>
        {heroes.map((hero: Hero) => <HeroCard hero={hero} key={hero.url} />)}
        {isModalOpen && activeHeroUrl &&
          <Modal
            url={activeHeroUrl}
            handleClick={handleCloseModalClick}
            handleKeyDown={handleKeyDown}
          />
        }
      </ul>
      {isContentMore && !isLoading &&
        <p className={`${styles.resume} ${styles.resumeMore}`}>Scroll down to show more...</p>}

      {!isContentMore && !isLoading &&
        <p className={styles.resume}>That`s all!</p>}

      {isLoading && <p className={styles.loader}>Loading...</p>}
    </>
  );
}

export default HeroesList;
