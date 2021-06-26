import { MOVIE_SINGLE_PENDING, MOVIE_SINGLE_SUCCESS, MOVIE_SINGLE_FAILED } from '../actions/movieSingleAction';

const initialState = {
    movie: null,
    loading: false,
    error: null,
};

export const movieSingleReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case MOVIE_SINGLE_PENDING:
            return {
                movie: null,
                loading: true,
                error: null,
            };

        case MOVIE_SINGLE_SUCCESS:
            return {
                movie: payload.movie,
                loading: false,
                error: null,
            };

        case MOVIE_SINGLE_FAILED:
            return {
                movie: null,
                loading: false,
                error: payload,
            };

        default:
            return state;
    }
};