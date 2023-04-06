type propertyCharacterType = {
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
  origin: propertyCharacterType;
  location: propertyCharacterType;
};
