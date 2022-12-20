type Hero = {
  birthYear: string,
  eyeColor: string,
  films: string[],
  gender: string,
  hairColor: string,
  height: string,
  homeWorld: string,
  mass: string,
  name: string,
  skinColor: string,
  created: string,
  edited: string,
  species: string[],
  starships: string[],
  url: string,
  vehicles: string[],
}

type Heroes = Hero[];

export type { Hero, Heroes };
