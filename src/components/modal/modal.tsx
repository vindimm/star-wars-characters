import { getGenderIcon } from '../../utils/utils';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getHeroByUrl } from '../../store/selectors';
import Physical from '../physical/physical';
import Badges from '../badges/badges';
import styles from './modal.module.css';

type ModalProps = {
  url: string;
  handleClick: () => void;
  handleKeyDown: any;
};

function Modal({ url, handleClick, handleKeyDown }: ModalProps): JSX.Element {
  const hero = useAppSelector(getHeroByUrl(url));
  const gender = getGenderIcon(hero?.gender) || null;

  return (
    <div className={styles.layout} tabIndex={0} onKeyDown={handleKeyDown}>
      <div className={styles.container}>
        <div className={styles.leftWrapper}>
          {
            gender &&
            <img
              src={`./images/${gender}-icon.png`}
              width="200"
              height="200"
              alt="gender icon"
            />
          }
          <div className={styles.badgesWrapper}>
            {hero && <Badges hero={hero} />}
          </div>
        </div>
        <div className={styles.rightWrapper}>
          <h2 className={styles.title}>{hero?.name}</h2>
          <div className={styles.colorsWrapper}>
            <p className={styles.color}>Skin color: {hero?.skin_color}</p>
            <p className={styles.color}>Hair color: {hero?.hair_color}</p>
            <p className={styles.color}>Eye color: {hero?.eye_color}</p>
          </div>
          {hero && <Physical hero={hero} />}
        </div>
        <button className={styles.close} type="button" onClick={handleClick} autoFocus></button>
      </div>
    </div>
  );
}

export default Modal;
