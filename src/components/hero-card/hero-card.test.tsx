import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { makeFakeHero1 } from '../../utils/mocks';
import HeroCard from './hero-card';

const mockHero1 = {
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

const mockHero2 = {
  birth_year: 'mock_birthdate',
  eye_color: 'mock_eye_color',
  films: [],
  gender: 'male',
  hair_color: 'n/a',
  height: 'mock_height',
  homeWorld: 'mock_world',
  mass: 'mock_weigh',
  name: 'mock_name',
  skin_color: 'mock_skin_color',
  created: 'mock_created',
  edited: 'mock_edited',
  species: [],
  starships: [],
  url: 'mock_url',
  vehicles: [],
}

describe('Component: HeroCard', () => {
  it('renders correct name of hero mockHero1', () => {
    render(<HeroCard hero={mockHero1} />);
    expect(screen.getByText('R2-D2')).toBeInTheDocument();
  });

  it('renders correct height of hero mockHero1', () => {
    render(<HeroCard hero={mockHero1} />);
    expect(screen.getByText('96')).toBeInTheDocument();
    expect(screen.getByText('height')).toBeInTheDocument();
  });

  it('dont renders n/a data', () => {
    render(<HeroCard hero={mockHero1} />);
    expect(screen.queryByText('n/a')).not.toBeInTheDocument();
  });

  it('renders badge with birthdate', () => {
    render(<HeroCard hero={mockHero1} />);
    expect(screen.getByText('33BBY')).toBeInTheDocument();
  });

  it('renders only one badge for mockHero1', () => {
    render(<HeroCard hero={mockHero1} />);
    expect(screen.getAllByTestId('badge')).toHaveLength(1);
  });

  it('renders two badges for mockHero2', () => {
    render(<HeroCard hero={mockHero2} />);
    expect(screen.getAllByTestId('badge')).toHaveLength(2);
  });
});
