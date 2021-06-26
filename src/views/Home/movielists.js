import React from "react";
import { useSelector } from "react-redux";
import { Flex, Box, Card, Text } from "bushido-strap";

export default function Movielists() {
    const loading = useSelector(state => state.movieReducer.loading);
    const movies = useSelector(state => state.movieReducer.movies);
    const error = useSelector(state => state.movieReducer.error);

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
            console.log("Down")
        }
    }

    return (
        <Flex direction="column" align="center">
            {movies.map(movie =>
                <Card key={movie.imdbID} w="50rem" aiStart>
                    <Flex direction="row">
                        <Box w="6rem">
                            <img src={movie.Poster} alt={movie.Title} />
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