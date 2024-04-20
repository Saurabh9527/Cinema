
import React, { useEffect } from 'react'
import useMovieTrailor from '../Hooks/useMovieTrailor'
import { useDispatch, useSelector } from 'react-redux'
import { options } from '../util/constant'
import { addMovieTrailor } from '../features/movie/movieSlice'
const VideoBackground = ({movieId}) => {
    
    const trailer = useSelector((store)=>store.movie.movieTrailer)
    useMovieTrailor(movieId)
    return (
        <div className=''>
            <iframe className='w-full h-full  aspect-video ' 
            src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe>
        </div>
    )
}

export default VideoBackground
