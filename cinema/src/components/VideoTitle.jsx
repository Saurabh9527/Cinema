
import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='absolute inset-0 flex items-center justify-center'>
    <div className='-mt-96 mr-40 mb-[80px] flex-col md:mb-0 md:mt-5 md:mx-8'>
    <div className="text-white p-2">
      <h1 className=' text-3xl font-bold md:my-2'>{title}</h1>
      <p className='hidden md:block w-3/12'>{overview}</p>
      </div>
      <div className='flex'>
        <button className='p-1 pr-2 pl-2 px-3 bg-gray-50 md:p-2 md:px-4 mt-3 mx-2 rounded-md hover:bg-gray-300'>▶️Play</button>
        <button className='p-1 pr-2 pl-2 px-3 bg-gray-400 bg-opacity-70 md:p-2 md:px-4 mt-3 rounded-md hover:bg-gray-200'>ℹ️ More Info</button>
      </div>
    </div>
    </div>
  )
}

export default VideoTitle
