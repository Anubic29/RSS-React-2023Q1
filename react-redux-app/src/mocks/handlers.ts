import { rest } from 'msw';

const characterArr = [
  {
    created: '2017-11-04T18:48:46.250Z',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    gender: 'Male',
    id: 1,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    name: 'Rick Sanchez',
    origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
    species: 'Human',
    status: 'Alive',
    type: '',
    url: 'https://rickandmortyapi.com/api/character/1',
  },
  {
    created: '2017-11-04T20:33:30.779Z',
    episode: ['https://rickandmortyapi.com/api/episode/31'],
    gender: 'unknown',
    id: 13,
    image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    name: 'Alien Googah',
    origin: { name: 'unknown', url: '' },
    species: 'Alien',
    status: 'unknown',
    type: '',
    url: 'https://rickandmortyapi.com/api/character/13',
  },
];

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    const characterName = req.url.searchParams.get('name');
    const filteredArr = characterArr.filter((character) =>
      character.name.includes(characterName ? characterName : '')
    );
    if (filteredArr.length > 0) {
      return res(
        ctx.status(200),
        ctx.json({
          results: characterArr,
        })
      );
    } else {
      return res(ctx.status(500));
    }
  }),
  rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(characterArr[0]));
  }),
  rest.get('https://rickandmortyapi.com/api/character/2', (req, res, ctx) => {
    return res(ctx.status(400));
  }),
];
