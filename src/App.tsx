import { PokeCard } from "./components/poke-card/PokeCard";
import "./App.css";
import React from "react";
import { api } from "./services/api";
import type { Pokemon } from "./data/dto/PokemonDTO";
import { SearchBar } from "./components/search-bar/Searchbar";
import { PokeCardsContainer } from "./components/poke-cards-container/PokeCardsContainer";
import { SelectedPokeCard } from "./components/selected-poke-card/SelectedPokeCard";

export const App = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = React.useState<Pokemon | null>(null)

  React.useEffect(() => {
    const getPokemon = async (id: number) => {
      const auxPokemons: Pokemon[] = [];
      try {
        for (let i = 0; i < 20; i++) {
          const response = await api.get(`/pokemon/${i + 1}`);
          auxPokemons.push(response.data);
        }
        setPokemons(auxPokemons);
      } catch (e) {
        console.error(e);
      }
    };
    getPokemon(12);
    console.log(pokemons);
  }, []);

  if (pokemons.length == 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      <SearchBar />
      <div className="poke-cards-wrapper">
        <PokeCardsContainer setSelected={setSelectedPokemon} pokemons={pokemons} />
      </div>
        <SelectedPokeCard pokemon={selectedPokemon || pokemons[0]} />
    </div>
  );
};
