import { Link } from 'react-router-dom';

import { Pages } from '../../const';
import { AppRoute } from '../../const';
import './style.css';

type HeaderProps = {
  currentPage: string;
};

function Header({ currentPage }: HeaderProps): JSX.Element {
  return (
    <header className="page-header">
      <div className="page-header__container">
        <img className='page-header__logo' src={'./images/logo.png'} width="150" height="90" alt="StarWars Logo" />
        <nav className="page-nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              {currentPage === Pages.Home ? (
                <span className="nav__link nav__link--current">Home</span>
              ) : (
                <Link className="nav__link" to={AppRoute.Home}>
                  Home
                </Link>
              )}
            </li>
            <li className="nav__item">
              {currentPage === Pages.Characters ? (
                <span className="nav__link nav__link--current">Characters</span>
              ) : (
                <Link className="nav__link" to={AppRoute.Characters}>
                  Characters
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
