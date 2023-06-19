import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = 'decf0d9b807b1f4d767e254a6a4af171';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/week?api_key=${KEY}`);
  return data.results;
};

export const getMovieBySearchQuery = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );

  return data.results;
};

export const getMovieDetails = async movieId => {
  const movie = await axios.get(
    `movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return movie.data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${KEY}&language=en-US'`
  );
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return data.results;
};