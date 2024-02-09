import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptSearchResults from './GptSearchResults';
import { LOGIN_BG_IMAGE } from '../utils/constants';

const GptSearch = ()=>{
    

    return (
            <div className='h-full bg-gradient-to-b from-black flex justify-center items-center relative'>
                <img src={LOGIN_BG_IMAGE} className='absolute top-0 left-0 right-0 bottom-0 h-full w-full -z-[1]' alt="bg-image" />
                <div className='w-11/12 h-3/4 overflow-y-scroll no-scrollbar'>
                    <GptSearchBar />
                    <GptSearchResults />
                </div>
            </div>
        )
}

export default GptSearch;