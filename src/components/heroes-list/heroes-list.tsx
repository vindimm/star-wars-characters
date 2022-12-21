import { useState, MouseEvent, KeyboardEvent } from 'react';

import { Hero, Heroes } from '../../types/hero';
import { getHeroByUrl } from '../../store/selectors';
import { useAppSelector } from '../../hooks/use-app-selector';
import HeroCard from '../hero-card/hero-card';
import Modal from '../modal/modal';
import './style.css';

type HeroesListProps = {
  heroes: Heroes;
};

function HeroesList({ heroes }: HeroesListProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeHeroUrl, setActiveHeroUrl] = useState<string | null>('');

  const handleCardClick = (evt: MouseEvent<HTMLElement>) => {
    // Непосредственно элемент на котором произошел клик
    const target = evt.target as HTMLElement;

    // Если среди родителей target есть '.card', то он будет записан в card, иначе card = null
    const card = target.closest('.card');

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
    <ul className='heroes-list' onClick={handleCardClick}>
      {heroes.map((hero: Hero) => <HeroCard hero={hero} key={hero.url} />)}
      {isModalOpen && activeHeroUrl &&
        <Modal
          url={activeHeroUrl}
          handleClick={handleCloseModalClick}
          handleKeyDown={handleKeyDown}
        />
      }
    </ul>
  );
}

export default HeroesList;
