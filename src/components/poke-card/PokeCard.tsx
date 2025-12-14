import type { Pokemon } from "../../data/dto/PokemonDTO";
import { TypeContainer } from "../type-container/TypeContainer";
import "./styles.poke-card.css";

type PokeCardProps = {
  pokemon: Pokemon;
  setSelected?: (pokemon: Pokemon) => void;
};

export const PokeCard = ({ pokemon, setSelected }: PokeCardProps) => {
  return (
    <div className="poke-card" onClick={() => setSelected(pokemon)}>
      <div className="sprite-container">
        <img src={pokemon.sprites.front_default} />
      </div>

      <div className="order-name">
        <p className="order-number">N° {pokemon.id}</p>
        <h1>{pokemon.name[0].toLocaleUpperCase() + pokemon.name.slice(1)}</h1>
      </div>

      <div className="poke-types">
        <TypeContainer type={pokemon.types[0].type.name} />
        {pokemon.types[1] && (
          <TypeContainer type={pokemon.types[1].type.name} />
        )}
      </div>
    </div>
  );
};
