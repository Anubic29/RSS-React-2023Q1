import instance from './instance';

import characterModule from './character';

export default {
  character: characterModule(instance),
};
