export type Pokemon = {
  abilities: AbilityDTO[];
  base_experience: number;
  cries: CriesDTO;
  forms: FormsDTO[];
  game_indices: GameIndicesDTO[];
  height: number;
  held_items: HeldItemsDTO[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MovesDTO[];
  name: string;
  order: number;
  past_abilities: PastAbilitiesDTO[];
  species: SpeciesDTO;
  sprites: SpritesDTO;
  stats: StatsDTO[];
  types: TypesDTO[];
  weight: number;
};

export type AbilityDTO = {
  ability: {
    name: string;
    url: string;
  } | null;
  is_hidden: false;
  slot: number;
};

export type CriesDTO = {
  latest: string;
  legacy: string;
};

export type FormsDTO = {
  name: string;
  url: string;
};

export type VersionDTO = {
  name: string;
  url: string;
};

export type GameIndicesDTO = {
  game_index: number;
  version: VersionDTO;
};

export type ItemDTO = {
  name: string;
  url: string;
};

export type VersionDetailsDTO = {
  rarity: string;
  version: VersionDTO;
};

export type HeldItemsDTO = {
  item: ItemDTO;
  version_details: VersionDetailsDTO[];
};

export type MoveDTO = {
  name: string;
  url: string;
};

export type MoveLearnMethodDTO = {
  name: string;
  url: string;
};

export type VersionGroupDetailsDTO = {
  level_learned_at: number;
  move_learn_method: MoveLearnMethodDTO;
  order: number | null;
  version_group: VersionDTO;
};

export type MovesDTO = {
  move: MoveDTO;
  version_group_details: VersionDetailsDTO[];
};

export type PastAbilitiesDTO = {
  abilities: AbilityDTO[];
  generation: GenerationDTO;
};

export type GenerationDTO = {
  name: string;
  url: string;
};

export type SpeciesDTO = {
  name: string;
  url: string;
};

export type SpritesDTO = {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: OtherDTO
};

export type StatsDTO = {
  base_stat: number;
  effort: number;
  stat: StatDTO;
};

export type StatDTO = {
  name: string;
  url: string;
};

export type TypesDTO = {
  slot: number;
  type: TypeDTO;
};

export type TypeDTO = {
  name: string;
  url: string;
};

export type DreamWorldDTO = {
  front_default: string;
  front_female: string | null;
};

export type HomeDTO = {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
};

export type OfficialArtworkDTO = {
  front_default: string;
  front_shiny: string;
};

export type ShowdownDTO = {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
};

export type OtherDTO = {
  dream_world: DreamWorldDTO;
  home: HomeDTO;
  official_artwork: OfficialArtworkDTO;
  showdown: ShowdownDTO;
};
