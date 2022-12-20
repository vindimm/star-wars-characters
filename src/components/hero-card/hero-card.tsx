import { Hero } from '../../types/hero';
import { getBadgeColor } from '../../utils/utils';
import './style.css';

type HeroesListProps = {
  hero: Hero;
};

function HeroCard({ hero }: HeroesListProps): JSX.Element {
  const genderColor = getBadgeColor(hero.gender);

  return (
    <li className='card'>
      <h3 className='card__title'>{hero.name}</h3>
      <dl className='card__list'>
        <div className='card__item'>
          <dt className='card__term'>height</dt>
          <dd className='card__desc'>{hero.height}</dd>
        </div>
        <div className='card__item'>
          <dt className='card__term'>mass</dt>
          <dd className='card__desc'>{hero.mass}</dd>
        </div>
      </dl>
      <div className='card__badges-wrapper'>
        {
          genderColor && 
          <span className={`card__badge card__badge--${genderColor}`}>{hero.gender}</span>
        }
        {
          hero.birth_year !== 'unknown' &&
          <span className='card__badge card__badge--blue'>{hero.birth_year}</span>
        }
      </div>
    </li>
  )
}

export default HeroCard;
