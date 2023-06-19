import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/Api";
import { Title } from "./Home.module";

import MovieList from "components/MovieList/MovieList";


const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getTrendingMovies('').then(setMovies)
        
    }, [])
    return (
        <>
            <Title>Trending today</Title>
            <MovieList movies={movies}/>
        </>
    )
};

export default Home;