import { Hero } from '../../types/hero';
import { getBadgeColor } from '../../utils/utils';
import './style.css';

type BadgesProps = {
  hero: Hero;
};

function Badges({ hero }: BadgesProps): JSX.Element {
  const genderColor = getBadgeColor(hero.gender);

  return (
    <div className='badges'>
      {
        genderColor && 
        <span className={`badges__item badges__item--${genderColor}`} data-testid="badge">
          {hero.gender}
        </span>
      }
      {
        hero.birth_year !== 'unknown' &&
        <span className='badges__item badges__item--blue' data-testid="badge">
          {hero.birth_year}
        </span>
      }
    </div>
  )
}

export default Badges;
