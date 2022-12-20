import { Hero, Heroes } from '../../types/hero';
import HeroCard from '../hero-card/hero-card';

type HeroesListProps = {
  heroes: Heroes;
};

function HeroesList({ heroes }: HeroesListProps): JSX.Element {
  return (
    <ul>
      {heroes.map((hero: Hero) => <HeroCard hero={hero} key={hero.created} />)}
    </ul>
  );
}

export default HeroesList;
