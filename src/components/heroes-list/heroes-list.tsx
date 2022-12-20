import { Hero, Heroes } from '../../types/hero';
import HeroCard from '../hero-card/hero-card';
import './style.css';

type HeroesListProps = {
  heroes: Heroes;
};

function HeroesList({ heroes }: HeroesListProps): JSX.Element {
  return (
    <ul className='heroes-list'>
      {heroes.map((hero: Hero) => <HeroCard hero={hero} key={hero.created} />)}
    </ul>
  );
}

export default HeroesList;
