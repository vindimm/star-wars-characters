import Header from '../../header/header';
import { Pages } from '../../../const';
import './style.css';

function HomePage(): JSX.Element {
  return (
    <div className="home">
      <Header currentPage={Pages.Home} />
      <div className="home__container">
        <h1 className="home__title">Find all your favorite characters</h1>
        <p className="home__text">You can find out all the information about your favorite characters</p>
      </div>
    </div>
  );
}

export default HomePage;
