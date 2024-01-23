import React from 'react';
import MovieCard from './MovieCard';
const MovieList = ({ title, movieList})=>{
    console.log(title, movieList);
    return (
        <div className='p-8'>
            <h3 className='font-semibold text-3xl mb-5'>{title}</h3>
            <div className='flex overflow-x-scroll'>
                    {
                        movieList.map((item)=> <MovieCard key={item.id} movieData={item} />)
                    }
                </div>
        </div>
    )
}

export default MovieList;