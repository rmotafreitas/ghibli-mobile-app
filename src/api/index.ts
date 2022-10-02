const BASE_URL = "https://ghibliapi.herokuapp.com";
export const API = {
  FILMS: `${BASE_URL}/films`,
};

export interface ResponseAllMoviesObject {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  description: string;
  director: string;
  producer: string;
  release_date: number;
  running_time: number;
  rt_score: number;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string[];
}
