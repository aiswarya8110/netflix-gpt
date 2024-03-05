import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addMostPopularMovies, addNowPlayingMovies, addTopRatedMovies, addUpComingMovies } from "../utils/moviesSlice";
import { API_OPTIONS, NOW_PLAYING_MOVIES_API, MOST_POPULAR_MOVIES_API, TOP_RATED_MOVIES_API, UPCOMING_MOVIES_API } from "../utils/constants";

const useAllMoviesByCategory = ()=>{
    const dispatch = useDispatch();
    const getAllMoviesByCategories = async()=>{
        try{
            const results = await Promise.allSettled([
                fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS),
                fetch(MOST_POPULAR_MOVIES_API, API_OPTIONS),
                fetch(TOP_RATED_MOVIES_API, API_OPTIONS),
                fetch(UPCOMING_MOVIES_API, API_OPTIONS)
            ])
            console.log(results);
            const promises = results.map(async({ value })=> value.json())
            const movieCategoryDataList = await Promise.allSettled(promises);
            movieCategoryDataList.forEach(({ value }, index)=>{
                if(value.results){
                    switch(index){
                        case 0:
                            dispatch(addNowPlayingMovies(value.results))
                            break;
                        case 1:
                            dispatch(addMostPopularMovies(value.results))
                            break;
                        case 2:
                            dispatch(addTopRatedMovies(value.results))
                            break;
                        case 3:
                            dispatch(addUpComingMovies(value.results))
                    }
                }
            })
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getAllMoviesByCategories();
    },[])
}

export default useAllMoviesByCategory;