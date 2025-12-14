import type { Pokemon } from "../../data/dto/PokemonDTO";
import { PokeCard } from "../poke-card/PokeCard";
import "./style.poke-cards-container.css";

type PokeCardsContainer = {
  pokemons: Pokemon[];
  setSelected?: (pokemon: Pokemon) => void;
};

export const PokeCardsContainer = ({
  pokemons,
  setSelected,
}: PokeCardsContainer) => {
  return (
    <div className="poke-cards-container">
      {pokemons.map((pokemon) => {
        return (
          <PokeCard
            setSelected={setSelected}
            pokemon={pokemon}
            key={pokemon.id}
          />
        );
      })}
    </div>
  );
};
