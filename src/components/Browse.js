import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utils/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useAllMoviesByCategory from './useAllMoviesByCategory';
const Browse = () => {
  useAllMoviesByCategory();
  return (
    <div className="h-screen">
      <Header />
      {/* 
          MainContainer
           - VideoBackground
           - VideoTitle
          SecondaryContainer
           - MovieList * n
            - cards * n
      
      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse