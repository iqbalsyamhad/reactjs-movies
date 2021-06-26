import { movieAPIS, configAPI } from "../../utils/omdb";

export const MOVIE_PENDING = "MOVIE_PENDING";
export const MOVIE_FAILED = "MOVIE_FAILED";
export const MOVIE_SUCCESS = "MOVIE_SUCCESS";

export const getMovie = () => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_PENDING });

        const getMovieResponse = await movieAPIS.get('', { params: { s: "Batman", page: 2, ...configAPI } });
        // console.log("API result: " + JSON.stringify(getMovieResponse))

        const movies = [...getMovieResponse.data.Search];

        dispatch({
            type: MOVIE_SUCCESS,
            payload: {
                movies
            },
        });
    } catch (e) {
        console.log(e);
        console.log(e.response);

        dispatch({
            type: MOVIE_FAILED,
            payload: e.response,
        });
    }
};