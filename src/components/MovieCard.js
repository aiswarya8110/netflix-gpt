import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TMDB_IMAGE_URL } from '../utils/constants';
import { addCurrentViewedMovie, removeCurrentViewedMovie } from '../utils/moviesSlice';
import CurrentMovie from './CurrentMovie';
const MovieCard = ({ movieData })=>{
    const currentViewedMovie = useSelector((store)=> store.movies?.currentViewedMovie);
    const dispatch = useDispatch();
    const { poster_path, uid, id }= movieData;
    if(!poster_path) return;

    return (
        <div className='shrink-0 h-80 hover:scale-105 cursor-pointer duration-1000 ease-out transition' onMouseEnter={()=> dispatch(addCurrentViewedMovie(movieData))} 
        onMouseLeave={()=> dispatch(removeCurrentViewedMovie())}>
            {currentViewedMovie?.uid === uid ? (
            <CurrentMovie movieId={id} />) : (
            <img src={TMDB_IMAGE_URL+poster_path} alt="movie thumbnail" className='w-48'/>)}
        </div>
    )
}

export default MovieCard;