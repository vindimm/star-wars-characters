import { Genders } from '../const';

// Получение цвета бейджа в карточке в зависимости от пола персонажа
export const getBadgeColor = (gender: string) => {
  let result: string | null = '';

  switch (gender) {
    case Genders.Male:
      result = 'green';
      break;
    case Genders.Female:
      result = 'purple';
      break;
    case Genders.Hermaphrodite:
      result = 'yellow';
      break;
    case Genders.NA:
      result = null;
  }

  return result;
};
