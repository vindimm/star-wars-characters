import { Link } from "react-router-dom";

import { AppRoute } from "../../const";
import "./style.css";

type HeaderProps = {
  currentLink: string;
};

function Header({ currentLink }: HeaderProps): JSX.Element {
  return (
    <header className="page-header">
      <nav className="page-nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            {currentLink === "Home" ? (
              <span className="nav__link nav__link--current">Home</span>
            ) : (
              <Link className="nav__link" to={AppRoute.Home}>
                Home
              </Link>
            )}
          </li>
          <li className="nav__item">
            {currentLink === "Characters" ? (
              <span className="nav__link nav__link--current">Characters</span>
            ) : (
              <Link className="nav__link" to={AppRoute.Characters}>
                Characters
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
