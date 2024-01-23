import { useEffect } from 'react';
import { addMovieTrailerKey } from './moviesSlice';
import { useDispatch } from 'react-redux';
import { MOVIES_VIDEOS_API, API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (id)=>{
    const dispatch = useDispatch();
    const getMovieVideos = async()=>{
        try{
            const response = await fetch(MOVIES_VIDEOS_API+`${id}/videos?language=en-US`, API_OPTIONS);
            const data = await response.json();

            const trailers = data.results.filter((item)=> item.type === "Trailer");
            const trailer = trailers.length === 0 ? data.results[0] : trailers[0];
            console.log(trailer);
            dispatch(addMovieTrailerKey(trailer.key));
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getMovieVideos();
    },[])
}

export default useMovieTrailer;