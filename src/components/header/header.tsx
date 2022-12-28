import { NavLink } from 'react-router-dom';

import { AppRoute } from '../../const';
import styles from './header.module.css';

function Header(): JSX.Element {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <NavLink to={AppRoute.Home}>
          <img className={styles.logo} src={'./images/logo.png'} width="150" height="90" alt="StarWars Logo" />
        </NavLink>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                to={AppRoute.Home}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.navLinkCurrent}` : styles.navLink
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to={AppRoute.Characters}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.navLinkCurrent}` : styles.navLink
                }
              >
                Characters
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header >
  );
}

export default Header;
