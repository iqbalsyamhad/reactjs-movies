import { MOVIES_PENDING, MOVIES_FAILED, MOVIES_SUCCESS, MOVIES_UPDATE } from "../actions/moviesAction";

const initialState = {
    movies: [],
    loading: false,
    isEnddata: true,
    error: null,
};

export const moviesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case MOVIES_PENDING:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case MOVIES_SUCCESS:
            return {
                movies: payload.movies,
                loading: false,
                isEnddata: payload.isEnddata,
                error: null,
            };

        case MOVIES_UPDATE:
            return {
                movies: [...state.movies, ...payload.movies],
                loading: false,
                isEnddata: payload.isEnddata,
                error: null,
            };

        case MOVIES_FAILED:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        default:
            return state;
    }
};