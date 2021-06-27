import React, { useEffect } from "react";

import { Wrapper, Container, Input } from "bushido-strap";
import { getMovie } from "../../store/actions/moviesAction";
import { Movielists } from "./movielists";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const [query, setQuery] = React.useState("Batman");
  const [page, setPage] = React.useState(1);

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

  return (
    <Wrapper>
      <Container>
        <h1 style={{ color: 'black' }}>Movies</h1>
        <Input placeholder="Search..." value={query} onChange={(v) => {
          setQuery(v.target.value)
          setPage(1)
        }} />
        <Movielists />
      </Container>
    </Wrapper>
  );
}
