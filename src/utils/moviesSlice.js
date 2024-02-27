import { createSlice } from '@reduxjs/toolkit';
import addUIDToMovies from './addUIDToMovies';
const moviesSlice = createSlice({
    name: 'movies',
    initialState: null,
    reducers: {
        addNowPlayingMovies: (state, action)=>{
            return {...state, nowPlayingMovies: addUIDToMovies(action.payload)}
        },
        addMovieTrailerKey: (state, action)=>{
            return {...state, trailerKey: action.payload}
        },
        addMostPopularMovies: (state, action)=>{
            return {...state, mostPopularMovies: addUIDToMovies(action.payload)}
        },
        addTopRatedMovies: (state, action)=>{
            return {...state, topRatedMovies: addUIDToMovies(action.payload)}
        },
        addUpComingMovies: (state, action)=>{
            return {...state, upcomingMovies: addUIDToMovies(action.payload)}
        },
        addCurrentViewedMovie: (state, action)=>{
            return {...state, currentViewedMovie: action.payload}
        },
        removeCurrentViewedMovie: (state)=>{
            return {...state, currentViewedMovie: null}
        },
        addCurrentViewedMovieData: (state, action)=>{
            return {...state, currentViewedMovieData: action.payload}
        },
        removeCurrentViewedMovieData: (state)=>{
            return {...state, currentViewedMovieData: null};
        }
    }
});

export const { addNowPlayingMovies, addMovieTrailerKey, addMostPopularMovies, addTopRatedMovies, addUpComingMovies, addCurrentViewedMovie, removeCurrentViewedMovie, addCurrentViewedMovieData, removeCurrentViewedMovieData } = moviesSlice.actions;

export default moviesSlice.reducer;