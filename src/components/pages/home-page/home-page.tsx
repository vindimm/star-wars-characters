import { Link } from 'react-router-dom';

import Header from '../../header/header';
import { AppRoute } from '../../../const';
import './style.css';

function HomePage(): JSX.Element {
  return (
    <div className="home">
      <Header />
      <div className="home__container">
        <h1 className="home__title">Find all your favorite characters</h1>
        <p className="home__text">You can find out all the information about your favorite characters</p>
        <Link className="home__link" to={AppRoute.Characters}>See more...</Link>
      </div>
    </div>
  );
}

export default HomePage;
