// Структура ответа сервера по запросу персонажей
import { Heroes } from './hero';

type HeroesResponse = {
  count: string,
  next: string,
  previous: string[],
  results: Heroes,
}

export type { HeroesResponse };
