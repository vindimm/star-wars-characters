import { Hero } from '../../types/hero';
import styles from './physical.module.css';

type PhysicalProps = {
  hero: Hero;
};

function Physical({ hero }: PhysicalProps): JSX.Element {
  return (
    <dl className={styles.list}>
      <div className={styles.item}>
        <dt className={styles.term}>height</dt>
        <dd className={styles.desc}>{hero.height === 'unknown' ? 'N/A' : hero.height}</dd>
      </div>
      <div className={styles.item}>
        <dt className={styles.term}>mass</dt>
        <dd className={styles.desc}>{hero.mass === 'unknown' ? 'N/A' : hero.mass}</dd>
      </div>
    </dl>
  )
}

export default Physical;
