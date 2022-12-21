import { getGenderIcon } from '../../utils/utils';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getHeroByUrl } from '../../store/selectors';
import Physical from '../physical/physical';
import Badges from '../badges/badges';
import './style.css';

type ModalProps = {
  url: string;
  handleClick: () => void;
  // handleKeyDown: (evt: KeyboardEventHandler<HTMLDivElement>) => void;
  handleKeyDown: any;
};

function Modal({ url, handleClick, handleKeyDown }: ModalProps): JSX.Element {
  const hero = useAppSelector(getHeroByUrl(url));
  const gender = getGenderIcon(hero?.gender) || null;

  return (
    <div className="modal modal-layout" tabIndex={0} onKeyDown={handleKeyDown}>
      <div className="modal__container">
        <div className="modal__left-wrapper">
          {
            gender &&
            <img
              className="modal__gender-icon"
              src={`./images/${gender}-icon.png`}
              width="200"
              height="200"
              alt="gender icon"
            />
          }
          <div className="modal__badges-wrapper">
            {hero && <Badges hero={hero} />}
          </div>
        </div>
        <div className="modal__right-wrapper">
          <h2 className="modal__title">{hero?.name}</h2>
          <div className="modal__colors-wrapper">
            <p className="modal__color">Skin color: {hero?.skin_color}</p>
            <p className="modal__color">Hair color: {hero?.hair_color}</p>
            <p className="modal__color">Eye color: {hero?.eye_color}</p>
          </div>
          {hero && <Physical hero={hero} />}
        </div>
        <button className="modal__close" type="button" onClick={handleClick} autoFocus></button>
      </div>
    </div>
  );
}

export default Modal;
