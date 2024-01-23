import React from 'react';
import { TMDB_IMAGE_URL } from '../utils/constants';
const MovieCard = ({ movieData })=>{
    const { poster_path }= movieData;
    console.log(movieData);
    return (
        <div className='mr-5 w-48 shrink-0'>
            <img src={TMDB_IMAGE_URL+poster_path} alt="movie thumbnail"/>
        </div>
    )
}

export default MovieCard;