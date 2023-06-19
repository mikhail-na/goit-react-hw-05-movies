import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieBySearchQuery } from "services/Api";

import SearchForm from 'components/SearchForm/Form';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
    const [searchQuery, setSearchQuery] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const inputValue = searchQuery.get("query") ?? "";

    useEffect(() => {

        if (inputValue === '') return;
        getMovieBySearchQuery(inputValue)
            .then(res => {
                setMovies(res)
            })
            .catch(err =>
                console.error(err));
            
        getMovieBySearchQuery();
    }, [inputValue, searchQuery]);
    

    return (
    <>
      <SearchForm setSearchQuery={setSearchQuery} />
      {<MovieList movies={movies} />}
    </>
    );
};

export default Movies;