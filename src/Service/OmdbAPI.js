import dotenv from "dotenv";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';


export const searchMovies = async (query, page = 1, type = '') => {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}${type ? `&type=${type}` : ''}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.Response === 'False') throw new Error(data.Error);
  return data;
};

export const getMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
  const data = await res.json();
  if (data.Response === 'False') throw new Error(data.Error);
  return data;
};
