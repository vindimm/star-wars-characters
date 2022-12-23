import { Genders } from '../const';
import { Heroes } from '../types/hero';

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

// Получение названия иконки в зависимости от пола персонажа
export const getGenderIcon = (gender: string | undefined) => {
  let result: string | null = '';

  switch (gender) {
    case Genders.Male:
      result = 'male';
      break;
    case Genders.Female:
      result = 'female';
      break;
    case Genders.Hermaphrodite:
      result = 'alien';
      break;
    case Genders.NA:
      result = null;
  }

  return result;
};
