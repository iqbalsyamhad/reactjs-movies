import React from "react";
import { useSelector } from "react-redux";
import { Flex, Box, Card, Text } from "bushido-strap";

export const Movielists = props => {
    const loading = useSelector(state => state.moviesReducer.loading);
    const movies = useSelector(state => state.moviesReducer.movies);
    const error = useSelector(state => state.moviesReducer.error);

    return (
        <Flex direction="column" align="center">
            {movies.map(movie =>
                <Card key={movie.imdbID} w="100%" aiStart>
                    <Flex direction="row">
                        <Box w="6rem">
                            <img src={movie.Poster} alt={movie.Title} onClick={() => props.handleClick(movie.imdbID)} />
                        </Box>
                        <Box m="1rem">
                            <Text>{movie.Title}</Text>
                            <Text>{movie.Year}</Text>
                        </Box>
                    </Flex>
                </Card>
            )}
            {loading && <Text>Loading...</Text>}
            {!loading && movies.length === 0 && <Text>{error?.data?.Error || 'No data!'}</Text>}
        </Flex>
    );
}