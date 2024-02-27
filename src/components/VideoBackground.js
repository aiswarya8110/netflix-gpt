import React from 'react';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../utils/useMovieTrailer';

const VideoBackground = ({ movieData })=>{
    const trailerKey = useSelector((store)=> store.movies?.trailerKey);
    const { original_title, overview, id } = movieData;
    useMovieTrailer(id);

    return (
        <div className='relative h-3/4 md:h-full bg-black'>
            <iframe className="absolute top-0 left-0 bottom-0 right-0 w-full h-full" src={`https://www.youtube.com/embed/${trailerKey}?si=vbN_JjBOL0an47i6&autoplay=0&mute=0&controls=0&&disablekb=1&showinfo=0&rel=0&modestbranding=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="allowfullscreen"/>
            <VideoTitle title={original_title} overview={overview} />
        </div>
    )
}

export default VideoBackground;