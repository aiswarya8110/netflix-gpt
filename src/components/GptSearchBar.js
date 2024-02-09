import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useSelector, useDispatch } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS, SEARCH_MOVIE_API } from '../utils/constants';
import { updateGptSearchResultsAndGptMovieNames } from '../utils/GptSearchSlice';

const GptSearchBar = ()=>{
    const currentLanguage = useSelector((store)=> store.app.currentLanguage);
    const searchInputRef = useRef();
    const dispatch = useDispatch();

    const searchMovieTMDB = async(movie)=>{
        try{
            const response = await fetch(SEARCH_MOVIE_API+`${movie}&include_adult=false&page=1`, API_OPTIONS);
            const data = await response.json();

            return data.results;
        }catch(error){
            console.log(error);
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        // const searchValue = searchInputRef.current.value;
        // const gptQuery= "Act as a movie recommendation system and suggest some movies for the query"+ searchValue + "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Koi Mil Gaya, Golmaal"
        
        // try{
        //     const gptResults = await openai.chat.completions.create({
        //         messages: [{role: 'user', content: gptQuery}],
        //         model: "gpt-3.5-turbo"
        //     });

        //     console.log(gptResults.choices[0].message.content);
        // }
        // catch(err){
        //     console.log(err)
        // }

       const gptMovieNames = ["Andaz Apna Apna"," Chalti Ka Naam Gaadi", "Hera Pheri", "Padosan", "Golmaal"]
       
       const promises = gptMovieNames.map((movie)=> searchMovieTMDB(movie));
 
       // Getting all settled promise results    
       const tmdbSearchResultsArray = await Promise.allSettled(promises);   

       // Filtering items whose value is resolved    
       const filteredTmdbSearchResults = tmdbSearchResultsArray.filter(({ value })=> value !== undefined)

       // Extracting the values    
       const tmdbSearchResults = filteredTmdbSearchResults.map(({ value })=> value)
       console.log(tmdbSearchResults);
       dispatch(updateGptSearchResultsAndGptMovieNames({tmdbSearchResults, gptMovieNames}))
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-row flex-nowrap'>
            <input type="text" ref={searchInputRef} className=' w-2/4 h-10 p-3 outline-none' 
            placeholder={lang[currentLanguage].gptSearchPlaceholder} />
            <button type="submit" className=' h-10 py-2 px-4 bg-red-700 text-white'>
                {lang[currentLanguage].search}
            </button>
        </form>
    )
}

export default GptSearchBar;