
import React, { useEffect } from 'react'
import { options } from '../util/constant';
import { addNowPlayingMovie } from '../features/movie/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

const useNowPlayingMovie = () => {
    const dispatch = useDispatch()
    const nowPlayingMovie = useSelector((store)=> store?.movie?.nowPlayingMovie);
    const getMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const res = await data.json()
        // console.log(res.results);
        dispatch(addNowPlayingMovie(res.results))
    }

    useEffect(()=>{
       !nowPlayingMovie &&  getMovies()
    },[])
}

export default useNowPlayingMovie
