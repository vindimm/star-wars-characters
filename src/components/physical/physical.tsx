import { Hero } from '../../types/hero';
import './style.css';

type PhysicalProps = {
  hero: Hero;
};

function Physical({ hero }: PhysicalProps): JSX.Element {
  return (
    <dl className='physical physical__list'>
      <div className='physical__item'>
        <dt className='physical__term'>height</dt>
        <dd className='physical__desc'>{hero.height}</dd>
      </div>
      <div className='physical__item'>
        <dt className='physical__term'>mass</dt>
        <dd className='physical__desc'>{hero.mass}</dd>
      </div>
    </dl>
  )
}

export default Physical;