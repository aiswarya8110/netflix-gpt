import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { addCurrentViewedMovieData, removeCurrentViewedMovieData } from '../utils/moviesSlice';
import { TMDB_IMAGE_URL } from '../utils/constants';
const CurrentMovie = ({ movieId })=>{
    const currentViewedMovieData = useSelector((store)=> store.movies.currentViewedMovieData);
    const dispatch = useDispatch();
    const getMovieGenre = async()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, API_OPTIONS);
        const data = await response.json();
        console.log(data);
        dispatch(addCurrentViewedMovieData(data));
    }
    useEffect(()=>{
        getMovieGenre();
    },[])

    if(!currentViewedMovieData){
        return <div className='w-48 md:w-72 lg:w-96 h-full bg-gray-900 rounded-lg'>
            <h3 className='text-center'>Loading...</h3>
        </div>
    }

    const {genres, original_title, runtime ,spoken_languages, backdrop_path} = currentViewedMovieData;

    return (
        <div className='w-48 md:w-72 lg:w-96 h-full bg-gray-900 rounded-lg' onMouseLeave={()=> dispatch(removeCurrentViewedMovieData)}>
            <img src={TMDB_IMAGE_URL+backdrop_path} alt="movie img" className='w-full h-3/5 object-cover' />
            <div className='p-2 md:p-5'>
                <h4 className='text-sm md:text-2xl font-bold text-ellipsis whitespace-nowrap overflow-hidden'>{original_title}</h4>
                <p className='text-sm font-normal'>{genres.map(({name})=>name).join(" . ")}</p>
                <p className='text-sm font-normal'>{spoken_languages.map(({ name })=> name).join(" . ")}</p>
                <p className='text-sm font-normal'>{(runtime/60).toFixed(2)} h</p>
            </div>
        </div>
    )
}

export default CurrentMovie;