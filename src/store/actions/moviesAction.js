import { movieAPIS, configAPI } from "../../utils/omdb";

export const MOVIES_PENDING = "MOVIES_PENDING";
export const MOVIES_FAILED = "MOVIES_FAILED";
export const MOVIES_SUCCESS = "MOVIES_SUCCESS";
export const MOVIES_UPDATE = "MOVIES_UPDATE";

export const getMovie = (query, page) => async (dispatch) => {
    try {
        dispatch({ type: MOVIES_PENDING });

        let isEnddata = true
        const type = page === 1 ? MOVIES_SUCCESS : MOVIES_UPDATE
        const getMovieResponse = await movieAPIS.get('', { params: { s: query, page: page, ...configAPI } });
        // console.log("API result: " + JSON.stringify(getMovieResponse))

        if (getMovieResponse.data.totalResults > 0) isEnddata = false
        const movies = [...getMovieResponse.data.Search || []];

        dispatch({
            type: type,
            payload: {
                movies,
                isEnddata
            },
        });
    } catch (e) {
        console.log(e);
        console.log(e.response);

        dispatch({
            type: MOVIES_FAILED,
            payload: e.response,
        });
    }
};