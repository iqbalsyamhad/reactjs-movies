import { movieAPIS, configAPI } from "../../utils/omdb";

export const MOVIE_SINGLE_PENDING = "MOVIE_SINGLE_PENDING";
export const MOVIE_SINGLE_FAILED = "MOVIE_SINGLE_FAILED";
export const MOVIE_SINGLE_SUCCESS = "MOVIE_SINGLE_SUCCESS";

export const getSingleMovie = (id) => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_SINGLE_PENDING });

        const getMovieResponse = await movieAPIS.get('', { params: { i: id, ...configAPI } });
        // console.log("API result: " + JSON.stringify(getMovieResponse))

        const movie = getMovieResponse.data;

        dispatch({
            type: MOVIE_SINGLE_SUCCESS,
            payload: {
                movie,
            },
        });
    } catch (e) {
        console.log(e);
        console.log(e.response);

        dispatch({
            type: MOVIE_SINGLE_FAILED,
            payload: e.response,
        });
    }
};