import { Link } from 'react-router-dom';

import Header from '../../header/header';
import { AppRoute } from '../../../const';
import styles from './home-page.module.css';

function HomePage(): JSX.Element {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Find all your favorite characters</h1>
        <p className={styles.text}>You can find out all the information about your favorite characters</p>
        <Link className={styles.link} to={AppRoute.Characters}>See more...</Link>
      </div>
    </div>
  );
}

export default HomePage;
