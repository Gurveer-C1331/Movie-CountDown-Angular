import { tmdb } from "./localConfig.environment";

export const environment = {
  production: false,
  ...tmdb
};
