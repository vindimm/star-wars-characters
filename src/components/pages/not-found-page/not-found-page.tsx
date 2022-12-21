import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import './style.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="not-found">
      <div className="not-found__fallback">
        <h1 className="not-found__title">404</h1>
      </div>
      <Link className="not-found__link" to={AppRoute.Home}>Return</Link>
    </div>
  );
}

export default NotFoundPage;
