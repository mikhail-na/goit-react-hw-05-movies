import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api';
import { ReviewsList, ReviewsItem, Author, Description } from './Reviews.module';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchMovieReviews = () => {
            getMovieReviews(movieId)
                .then(res =>
                    setReviews(res))
                .catch(err => {
                    console.log(err);
                });
        }
        fetchMovieReviews();
    }, [movieId])


   
    return reviews.length === 0 ?
        (<div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '100px',
            fontSize: '30px',
            fontWeight: 700,

            color: '#fff',

        }}>There's no reviews, please try again..</div>) : (
            <>     
                <ReviewsList>
                    {reviews.map(({ id, author, content }) => (
                        <ReviewsItem key={id}>
                            <Author>
                                <span>Author:</span> {author}
                            </Author>
                            <Description>{content}</Description>
                        </ReviewsItem>
                    ))}
                </ReviewsList>
        
            </>
        );
};

export default Reviews;


Reviews.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })),
};