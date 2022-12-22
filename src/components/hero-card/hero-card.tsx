import Badges from '../badges/badges';
import Physical from '../physical/physical';
import { Hero } from '../../types/hero';
import './style.css';

type HeroesListProps = {
  hero: Hero;
};

function HeroCard({ hero }: HeroesListProps): JSX.Element {
  return (
    <li className='card' data-url={hero.url}>
      <h3 className='card__title'>{hero.name}</h3>
      <Physical hero={hero} />
      <Badges hero={hero} />
    </li>
  )
}

export default HeroCard;
