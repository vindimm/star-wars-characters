import { Hero } from "../../types/hero";

type HeroesListProps = {
  hero: Hero;
};


function HeroCard({hero}: HeroesListProps): JSX.Element {
  return (
    <div>
      <h2>{hero.name}</h2>
    </div>
  )
}

export default HeroCard;
