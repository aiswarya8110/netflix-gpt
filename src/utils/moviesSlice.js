import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: null,
    reducers: {
        addNowPlayingMovies: (state, action)=>{
            return {...state, nowPlayingMovies: action.payload}
        },
        addMovieTrailerKey: (state, action)=>{
            return {...state, trailerKey: action.payload}
        }
    }
});

export const { addNowPlayingMovies, addMovieTrailerKey } = moviesSlice.actions;

export default moviesSlice.reducer;