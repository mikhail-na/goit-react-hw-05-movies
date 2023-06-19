import { Suspense, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams} from 'react-router-dom';
import { getMovieDetails } from 'services/Api';
import { Container, DescriptionBox, Title, List, Item, InfoBox, ListInfo, ListInfoItem, LinkInfo, Button } from './MovieDetails.module';


const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backPageLink = location.state?.from ?? '/';

  console.log(location);

    useEffect(() => {
        const fetchDetails = () => {
            getMovieDetails(movieId)
                .then((details) => {
                    setMovieInfo(details);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        fetchDetails();
    }, [movieId])


   
  if (!movieInfo) {
    return;
  }

  const {
    original_title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
  } = movieInfo || {};

  return (
    <>
      <Link to={backPageLink}>
        <Button type="button">Go back</Button>
      </Link>
      {movieInfo && (
        <Container>
          <img
            width="300px"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
            }
            alt={original_title}
          />
          <DescriptionBox>
            <Title>
              {original_title} ({release_date.slice(0, 4)})
            </Title>
            <p>User score: {popularity}</p>
            <Title>Overview</Title>
            <p>{overview}</p>
            <Title>Genres</Title>
            <List>
              {genres.map(({id, name})=> (
                <Item key={id}>{name}</Item>
              ))}
            </List>
          </DescriptionBox>
        </Container>
      )}
      <hr />
      <InfoBox>
        <Title>Additional information</Title>
        <ListInfo>
          <ListInfoItem>
            <LinkInfo to="cast">Cast</LinkInfo>
          </ListInfoItem>
          <ListInfoItem>
            <LinkInfo to="reviews">Reviews</LinkInfo>
          </ListInfoItem>
        </ListInfo>
        <hr />
       <Suspense fallback={<div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '100px',
            fontSize: '30px',
            fontWeight: 700,

            color: '#fff',

        }}>Loading...</div>}>
          <Outlet />
        </Suspense>
       </InfoBox>
    </>
  );


};

export default MovieDetails;