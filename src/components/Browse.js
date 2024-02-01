import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useAllMoviesByCategory from './useAllMoviesByCategory';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearchBar = useSelector((store)=> store.gptSearch.showGptSearchBar);
  useAllMoviesByCategory();
  return (
    <div className="h-screen">
      <Header />
      {showGptSearchBar ? <GptSearch /> :(
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
      )}
      
    </div>
  )
}

export default Browse