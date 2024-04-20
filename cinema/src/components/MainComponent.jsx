
import React, { useEffect } from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainComponent = () => {

    const movie= useSelector((store)=> store.movie?.nowPlayingMovie)
    // console.log(movie)
    if(movie == null) return ;
    const {id , title , overview} = movie[3];

  return (
    <div>
        <VideoBackground movieId = {id} />
        <VideoTitle title={title} overview={overview}/>
    </div>
  )
}

export default MainComponent
