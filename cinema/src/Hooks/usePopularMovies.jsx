
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../util/constant';
import { addPopularMovies } from '../features/movie/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const popularMovies = useSelector((store)=> store?.movie?.popularMovies);

    const getPopularMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const res = await data.json()
        // console.log(res.results);
        dispatch(addPopularMovies(res.results))
    }

    useEffect(()=>{
       !popularMovies &&  getPopularMovies()
    },[])
}

export default usePopularMovies
