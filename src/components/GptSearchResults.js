import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
const GptSearchResults = ()=>{
    const gptSearchResults = useSelector((store)=> store.gptSearch.gptSearchResults);
    const gptMovieNames = useSelector((store)=> store.gptSearch.gptMovieNames);
    if(gptSearchResults.length === 0) return;

    return (
        <div className='text-white'>
            <h3 className='my-4'>Search results for : {' '} 
                {gptMovieNames.join(" ")}
            </h3>
            {gptSearchResults.map((movieList, index)=> <MovieList key={gptMovieNames[index]} title={gptMovieNames[index]} movieList={movieList} />)}
        </div>
    )
}

export default GptSearchResults;