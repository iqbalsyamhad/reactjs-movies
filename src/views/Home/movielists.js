import React from "react";
import { useSelector } from "react-redux";
import { Flex, Box, Card, Text } from "bushido-strap";
import Modal from 'react-modal';
import { useHistory } from "react-router";

export const Movielists = props => {
    const history = useHistory();

    const loading = useSelector(state => state.moviesReducer.loading);
    const movies = useSelector(state => state.moviesReducer.movies);
    const error = useSelector(state => state.moviesReducer.error);

    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState(null);

    const handleImgclick = (img) => (e) => {
        e.stopPropagation()
        setImage(img)
        setOpen(true)
    }

    return (
        <>
            <Flex direction="column" align="center">
                {movies.map(movie =>
                    <Card key={movie.imdbID} w="100%" aiStart onClick={() => history.push('movie/' + movie.imdbID)}>
                        <Flex direction="row">
                            <Box w="6rem">
                                <img src={movie.Poster} alt={movie.Title} onClick={handleImgclick(movie.Poster)} />
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
            <Modal
                isOpen={open}>
                <button onClick={() => setOpen(false)}>x</button>
                <Box w="100%">
                    <img src={image} alt="" />
                </Box>
            </Modal>
        </>
    );
}