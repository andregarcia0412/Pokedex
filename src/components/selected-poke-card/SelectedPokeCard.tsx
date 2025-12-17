import React from "react";
import type { Pokemon } from "../../data/dto/PokemonDTO";
import "./styles.selected-poke-card.css";
import { api } from "../../services/api";
import { TypeContainer } from "../type-container/TypeContainer";

type SelectedPokemonCardProps = {
  pokemon: Pokemon;
};

export const SelectedPokeCard = ({ pokemon }: SelectedPokemonCardProps) => {
  const [pokedexEntry, setPokedexEntry] = React.useState<String>("");

  React.useEffect(() => {
    const getPokedexEntry = async (pokemon: Pokemon) => {
      try {
        const response = await api.get(`/pokemon-species/${pokemon.id}`);
        const entry = response.data.flavor_text_entries.find(
          (entry: any) => entry.language.name === "en"
        );

        if (entry) {
          setPokedexEntry(
            entry.flavor_text
              .replace(/\n/g, " ")
              .replace(/\f/g, " ")
              .replace("POKéMON", "Pokémon")
          );
        }
      } catch (e) {
        console.error(e);
      }
    };
    getPokedexEntry(pokemon);
  }, [pokemon]);

  return (
    <div className="selected-poke-card">
      <div className="selected-sprite-container">
        <img src={pokemon.sprites.other.showdown.front_default} />
      </div>

      <div className="other-info">
        <div className="selected-order-name">
          <p className="order-number">N° {pokemon.id}</p>
          <h1>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
        </div>

        <div className="poke-types selected-poke-types">
          <TypeContainer type={pokemon.types[0].type.name} />
          {pokemon.types[1] && (
            <TypeContainer type={pokemon.types[1].type.name} />
          )}
        </div>

        <div className="pokedex-entry">
          <h2>Pokedex Entry</h2>
          <p>{pokedexEntry}</p>
        </div>
      </div>
    </div>
  );
};
