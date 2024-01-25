import React from 'react';
import MovieCard from './MovieCard';
const MovieList = ({ title, movieList})=>{
    // console.log(title, movieList);
    if(!movieList) return;

    return (
        <div className='p-6'>
            <h3 className='font-semibold text-3xl mb-5'>{title}</h3>
            <div className='flex overflow-x-scroll no-scrollbar'>
                    {
                        movieList.map((item)=> <MovieCard key={item.id} movieData={item} />)
                    }
                </div>
        </div>
    )
}

export default MovieList;