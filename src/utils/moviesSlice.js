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
        },
        addMostPopularMovies: (state, action)=>{
            return {...state, mostPopularMovies: action.payload}
        },
        addTopRatedMovies: (state, action)=>{
            return {...state, topRatedMovies: action.payload}
        },
        addUpComingMovies: (state, action)=>{
            return {...state, upcomingMovies: action.payload}
        }
    }
});

export const { addNowPlayingMovies, addMovieTrailerKey, addMostPopularMovies, addTopRatedMovies, addUpComingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;