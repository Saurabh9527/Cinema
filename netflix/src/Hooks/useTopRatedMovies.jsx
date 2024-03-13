
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../util/constant';
import { addTopRatedMovies } from '../features/movie/movieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const topRatedMovies = useSelector((store)=> store?.movie?.topRatedMovies);
    const getTopratedMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const res = await data.json()
        // console.log(res.results);
        dispatch(addTopRatedMovies(res.results))
    }

    useEffect(()=>{
       !topRatedMovies &&  getTopratedMovies()
    },[])
}

export default useTopRatedMovies
