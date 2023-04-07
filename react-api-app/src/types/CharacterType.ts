export type PropertyCharacterType = {
  name: string;
  url: string;
};

export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: PropertyCharacterType;
  location: PropertyCharacterType;

  created: string;
  url: string;
  episode: string[];
};
