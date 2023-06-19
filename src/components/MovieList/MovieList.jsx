import { Link, useLocation } from "react-router-dom";
import { MovieItems, MovieItem } from "./MovieList.module";
import PropTypes from "prop-types";

const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <MovieItems>
            {movies.map(({ id, original_title }) => (
                <MovieItem key={id}>
                    <Link  to={`/movies/${id}`} state={{from: location}}> 
                        {original_title}
                    </Link>
                </MovieItem>
            )
            )}
        </MovieItems>
    )
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      original_title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieList;