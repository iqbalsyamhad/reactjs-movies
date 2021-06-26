import React, { useEffect } from "react";

import { Wrapper, Container, Input } from "bushido-strap";
import { getMovie } from "../../store/actions/moviesAction";
import { getSingleMovie } from "../../store/actions/movieSingleAction";
import { Movielists } from "./movielists";
import { MovieSingle } from "../Movie/moviesingle";
import Modal from 'react-modal';
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {
  const dispatch = useDispatch();

  const [query, setQuery] = React.useState("Batman");
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const endData = useSelector(state => state.moviesReducer.isEnddata);

  useEffect(() => {
    const requestMovies = () => {
      dispatch(getMovie(query, page));
    }
    requestMovies();
  }, [query, page]);

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
      !endData && setPage(page + 1)
    }
  }

  const requestMovieDetail = (id) => {
    dispatch(getSingleMovie(id));
    setOpen(true)
  }

  return (
    <Wrapper>
      <Container>
        <h1 style={{ color: 'black' }}>Movies</h1>
        <Input placeholder="Search..." value={query} onChange={(v) => {
          setQuery(v.target.value)
          setPage(1)
        }} />
        <Movielists handleClick={(id) => requestMovieDetail(id)} />
      </Container>
      <Modal
        isOpen={open}>
        <button onClick={() => setOpen(false)}>x</button>
        <MovieSingle />
      </Modal>
    </Wrapper>
  );
}
