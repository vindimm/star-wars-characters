import { Hero } from '../../types/hero';
import { getBadgeColor } from '../../utils/utils';
import styles from './badges.module.css';

type BadgesProps = {
  hero: Hero;
};

function Badges({ hero }: BadgesProps): JSX.Element {
  const genderColor = getBadgeColor(hero.gender);

  return (
    <div className='badges'>
      {
        genderColor && 
        <span className={`${styles.item} ${styles[genderColor]}`} data-testid="badge">
          {hero.gender}
        </span>
      }
      {
        hero.birth_year !== 'unknown' &&
        <span className={`${styles.item} ${styles.blue}`} data-testid="badge">
          {hero.birth_year}
        </span>
      }
    </div>
  )
}

export default Badges;
