import React from 'react';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';
const MainContainer = ()=>{
    const nowPlayingMovies = useSelector((store)=> store.movies?.nowPlayingMovies);

    if(!nowPlayingMovies) return;

    const mainMovie = nowPlayingMovies[Math.floor(Math.random()*nowPlayingMovies.length)];
    return (
            <VideoBackground movieData={mainMovie} />
        )
}

export default MainContainer;