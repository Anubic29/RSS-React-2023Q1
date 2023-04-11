import { AxiosInstance } from 'axios';
import { CharacterType } from 'types/CharacterType';

type ApiInfoType = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

type ApiResponseType = {
  info: ApiInfoType;
  results: CharacterType[];
};

export default function (instance: AxiosInstance) {
  return {
    getDataAll(name?: string) {
      let route = 'character';
      if (name) {
        route += `?name=${name}`;
      }
      return instance.get<ApiResponseType>(route);
    },
    getData(id: number) {
      return instance.get<CharacterType>(`character/${id}`);
    },
  };
}
