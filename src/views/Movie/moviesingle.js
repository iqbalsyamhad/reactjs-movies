import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Container, Flex, Box, Text } from "bushido-strap";
import { getSingleMovie } from "../../store/actions/movieSingleAction";

const MovieSingle = props => {
    const dispatch = useDispatch();

    const loading = useSelector(state => state.movieSingleReducer.loading);
    const error = useSelector(state => state.movieSingleReducer.error);
    const movie = useSelector(state => state.movieSingleReducer.movie);

    useEffect(() => {
        const requestDetailMovies = () => {
            dispatch(getSingleMovie(props.match.params.id));
        }
        requestDetailMovies();
    }, []);

    return (
        <Wrapper>
            <Container>
                {loading && <Text>Loading...</Text>}
                {!loading && error && <Text>{error || 'No data!'}</Text>}
                {movie &&
                    <>
                        <h1 style={{ color: 'black', alignSelf: 'center' }}>{movie.Title}</h1>
                        <Flex direction="row">
                            <Box w="20rem">
                                <img src={movie.Poster} alt={movie.Title} />
                            </Box>
                            <Box m="1rem">
                                <Text style={{ color: 'black' }}>{movie.Plot}</Text>
                            </Box>
                        </Flex>
                    </>
                }
            </Container>
        </Wrapper>
    );
}

export default MovieSingle