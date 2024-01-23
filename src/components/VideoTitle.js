import React from 'react';
import { IoIosPlay } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview })=>{

    return (
        <div className='absolute top-0 text-white pl-10 w-1/2 bg-gradient-to-r from-black h-full'>
            <h2 className='font-bold text-6xl mt-60'>{title}</h2>
            <p className='py-6'>{overview}</p>
            <div>
                <button className='bg-white p-4 px-12 mr-4  rounded-lg text-black text-xl hover:bg-opacity-65'>
                    <IoIosPlay className='mr-2 text-3xl inline-block'/>Play
                </button>
                <button className='bg-gray-500 p-4 px-12  rounded-lg text-white text-xl bg-opacity-50'>
                   <IoIosInformationCircleOutline className='mr-2 text-3xl inline-block'/> More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;