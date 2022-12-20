import Header from '../../header/header';
import { Pages } from '../../../const';
import './style.css';

function HomePage(): JSX.Element {
  return (
    <>
      <Header currentPage={Pages.Home} />
      <p>Home Page</p>
    </>
  );
}

export default HomePage;
