import { useEffect } from 'react';
import { API_OPTIONS, NOW_PLAYING_MOVIES_API } from './constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from './moviesSlice';

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    // Fetch data from TMDB API and update the store
    const getNowPlayingMovies = async()=>{
        try{
            const response = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS);
            const data = await response.json();
            dispatch(addNowPlayingMovies(data.results))
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;