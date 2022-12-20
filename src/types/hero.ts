type Hero = {
  birth_year: string,
  eye_color: string,
  films: string[],
  gender: string,
  hair_color: string,
  height: string,
  homeWorld: string,
  mass: string,
  name: string,
  skin_color: string,
  created: string,
  edited: string,
  species: string[],
  starships: string[],
  url: string,
  vehicles: string[],
}

type Heroes = Hero[];

export type { Hero, Heroes };
