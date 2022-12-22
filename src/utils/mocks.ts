import { Hero } from "../types/hero";

export const makeFakeHero1 = (): Hero => (
  {
    birth_year: '33BBY',
    eye_color: 'red',
    films: ['film1', 'film2'],
    gender: 'n/a',
    hair_color: 'n/a',
    height: '96',
    homeWorld: 'https://swapi.dev/api/planets/8/',
    mass: '32',
    name: 'R2-D2',
    skin_color: 'white, blue',
    created: '2014-12-10T15:11:50.376000Z',
    edited: '2014-12-20T21:17:50.311000Z',
    species: [],
    starships: [],
    url: 'https://swapi.dev/api/people/3/',
    vehicles: [],
  }
);

export const makeFakeHero2 = (): Hero => (
  {
    birth_year: 'mock_birth_date',
    eye_color: 'mock_eye_color',
    films: ['film1', 'film2'],
    gender: 'n/a',
    hair_color: 'n/a',
    height: 'mock_height',
    homeWorld: 'mock_world',
    mass: 'mock_weigh',
    name: 'R2-D2',
    skin_color: 'mock_skin_color',
    created: 'mock_created',
    edited: 'mock_edited',
    species: [],
    starships: [],
    url: 'mock_url',
    vehicles: [],
  }
);
