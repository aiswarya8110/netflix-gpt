import React from 'react';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';
const MainContainer = ()=>{
    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);

    if(movies === undefined) return;

    const mainMovie = movies[Math.floor(Math.random()*movies.length)];
    return (
        <div>
            <VideoBackground movieData={mainMovie} />
        </div>
    )
}

export default MainContainer;