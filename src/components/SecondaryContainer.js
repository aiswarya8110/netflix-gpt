import React from 'react';
import MovieList from "./MovieList";
import { useSelector } from 'react-redux';

const SecondaryContainer = ()=>{
    const movies = useSelector((store)=> store.movies);
    if(!movies) return;

    if(movies.nowPlayingMovies || movies.topRatedMovies || movies.upcomingMovies || movies.mostPopularMovies)
    return (
        <div className="bg-black">
            <div className='-mt-80 z-10 relative text-white'>
                <MovieList title="Now Playing" movieList={movies.nowPlayingMovies} />
                <MovieList title="Most Popular" movieList={movies.mostPopularMovies} />
                <MovieList title="Top Rated" movieList={movies.topRatedMovies} />
                <MovieList title="Upcoming" movieList={movies.upcomingMovies} />
            </div>
        </div>
    )
    
}

export default SecondaryContainer;