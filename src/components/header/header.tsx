import { NavLink } from 'react-router-dom';

import { AppRoute } from '../../const';
import './style.css';

function Header(): JSX.Element {
  const commonClassName = "nav__link";
  const activeClassName = "nav__link--current";

  return (
    <header className="page-header">
      <div className="page-header__container">
        <NavLink to={AppRoute.Home}>
          <img className='page-header__logo' src={'./images/logo.png'} width="150" height="90" alt="StarWars Logo" />
        </NavLink>
        <nav className="page-nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to={AppRoute.Home}
                className={({ isActive }) =>
                  isActive ? `${commonClassName} ${activeClassName}` : commonClassName
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to={AppRoute.Characters}
                className={({ isActive }) =>
                  isActive ? `${commonClassName} ${activeClassName}` : commonClassName
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
