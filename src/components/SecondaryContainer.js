import MovieList from "./MovieList";
import { useSelector } from 'react-redux';
const SecondaryContainer = ()=>{
    const movies = useSelector((store)=> store.movies);
    if(!movies) return;
    return (
        <div className="bg-black text-white">
            <MovieList title="Now Playing" movieList={movies.nowPlayingMovies} />
        </div>
    )
}

export default SecondaryContainer;