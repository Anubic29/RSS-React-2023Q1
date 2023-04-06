import { AxiosInstance } from 'axios';

export default function (instance: AxiosInstance) {
  return {
    getDataAll() {
      return instance.get(`character`);
    },
  };
}
