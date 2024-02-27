import React from 'react';
import { IoIosPlay } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview })=>{

    return (
        <div className='flex justify-start items-start absolute top-0 text-white w-full h-full bg-gradient-to-r from-black'>
            <div className='mt-52 md:mt-36 w-full md:w-3/4 lg:w-1/2 p-4 md:p-8'>
                <h2 className='font-bold text-4xl md:text-6xl'>{title}</h2>
                <p className='py-6'>{overview}</p>
                <div>
                    <button className='bg-white p-2 md:p-4 px-6 md:px-12 mr-4  rounded-lg text-black text-lg md:text-xl hover:bg-opacity-65'>
                        <IoIosPlay className='mr-2 text-xl md:text-3xl inline-block'/>Play
                    </button>
                    <button className='bg-gray-500 p-2 md:p-4 px-6 md:px-12  rounded-lg text-white text-lg md:text-xl bg-opacity-50'>
                    <IoIosInformationCircleOutline className='mr-2 text-xl md:text-3xl inline-block'/> More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle;