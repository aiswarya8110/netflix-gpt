import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
const GptSearch = ()=>{
    const currentLanguage = useSelector((store)=> store.app.currentLanguage);
    return (
            <div className='text-center h-screen flex justify-center items-start bg-black'>
                <form className='grid grid-cols-12 mt-40'>
                    <input type="text" className='col-span-9 h-10 outline-none' 
                    placeholder={lang[currentLanguage].gptSearchPlaceholder} />
                    <button className='col-span-3 h-10 py-2 px-4 bg-red-700 text-white'>
                        {lang[currentLanguage].search}
                    </button>
                </form>
            </div>
        )
}

export default GptSearch;