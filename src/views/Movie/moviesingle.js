import React from "react";
import { useSelector } from "react-redux";
import { Flex, Box, Card, Text } from "bushido-strap";

export const MovieSingle = props => {
    const loading = useSelector(state => state.movieSingleReducer.loading);
    const error = useSelector(state => state.movieSingleReducer.error);
    const movie = useSelector(state => state.movieSingleReducer.movie);

    return (
        <Flex direction="column">
            {loading && <Text>Loading...</Text>}
            {!loading && error && <Text>{error || 'No data!'}</Text>}
            {movie &&
                <>
                    <h1 style={{ alignSelf: 'center' }}>{movie.Title}</h1>
                    <Flex direction="row">
                        <Box w="20rem">
                            <img src={movie.Poster} alt={movie.Title} />
                        </Box>
                        <Box m="1rem">
                            <Text>{movie.Plot}</Text>
                        </Box>
                    </Flex>
                </>
            }
        </Flex>
    );
}