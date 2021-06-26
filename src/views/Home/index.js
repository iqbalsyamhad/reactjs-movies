import React, { useEffect } from "react";

import { Wrapper, Container, Card, Text } from "bushido-strap";
import { getMovie } from "../../store/actions/moviesAction";
import Movielists from "./movielists";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.movieReducer.loading)

  useEffect(() => {
    const requestMovies = () => {
      dispatch(getMovie());
    }
    requestMovies();
  }, []);

  return (
    <Wrapper>
      <Container>
        <h1>Hello, world!</h1>
        <Movielists />
      </Container>
    </Wrapper>
  );
}
