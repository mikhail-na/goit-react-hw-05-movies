import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';
import { CastList, CastItem, Actor, Description } from './Cast.module';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchMovieCast = () => {
            getMovieCast(movieId)
                .then(res =>
                    setCast(res))
                .catch(err => {
                    console.log(err);
                });
        }
        fetchMovieCast();
    }, [movieId])


   
    return cast === 0 ?
        (<div
        style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '100px',
            fontSize: '30px',
            fontWeight: 700,

            color: '#fff',

        }}>There's no Cast, please try again..</div>) : (
            <>
                <CastList>
                    
                    {cast.map(({ id, profile_path, original_name, character }) => (
                        <CastItem key={id}>
                            <img
                                width="200px"
                                src={
                                    profile_path
                                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                                        : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                                }
                                alt={original_name}
                            />
                            <Actor>
                                <span>Actor:</span> {original_name}
                            </Actor>
                            <Description>{character}</Description>
                        </CastItem>
                    ))}
                </CastList>
        
            </>
        );
};

export default Cast;


Cast.propTypes = {
    Cast: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        original_name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
    })),
};