import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import styles from './not-found-page.module.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.fallback}>
        <h1 className={styles.title}>404</h1>
      </div>
      <Link className={styles.link} to={AppRoute.Home}>Return</Link>
    </div>
  );
}

export default NotFoundPage;
