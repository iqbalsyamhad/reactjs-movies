import { MOVIE_PENDING, MOVIE_FAILED, MOVIE_SUCCESS } from "../actions/moviesAction";

const initialState = {
    movies: [],
    loading: false,
    error: null,
};

export const movieReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case MOVIE_PENDING:
            return {
                ...state,
                loading: true,
            };

        case MOVIE_SUCCESS:
            return {
                ...state,
                movies: payload.movies,
                loading: false,
            };

        case MOVIE_FAILED:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        default:
            return state;
    }
};