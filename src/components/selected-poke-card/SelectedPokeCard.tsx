import React from "react";
import type { Pokemon } from "../../data/dto/PokemonDTO";
import "./styles.selected-poke-card.css";
import { api } from "../../services/api";

type SelectedPokemonCardProps = {
  pokemon: Pokemon;
};

export const SelectedPokeCard = ({ pokemon }: SelectedPokemonCardProps) => {
  const [pokedexEntry, setPokedexEntry] = React.useState<String>("");

  React.useEffect(() => {
    const getPokedexEntry = async (pokemon: Pokemon) => {
      try {
        const response = await api.get(`/pokemon-species/${pokemon.id}`);
        setPokedexEntry(
          response.data.flavor_text_entries[0].flavor_text
            .replace("/\n/g", " ")
            .replace(/\f/g, " ")
            .replace("POKéMON", "Pokémon")
        );
      } catch (e) {
        console.error(e);
      }
    };
    getPokedexEntry(pokemon);
  }, []);

  return (
    <div className="selected-poke-card">
      <img src={pokemon.sprites.other.showdown.front_default} />
      <h1>{pokemon.name}</h1>
      <h2>Pokedex Entry</h2>
      <p>{pokedexEntry}</p>
    </div>
  );
};
