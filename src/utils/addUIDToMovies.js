import { nanoid } from 'nanoid';
const addUIDToMovies = (movieList)=>{
    return (
        movieList.map((movie)=>{
        movie.uid = nanoid();
        return movie;
    })
    )
}

export default addUIDToMovies;