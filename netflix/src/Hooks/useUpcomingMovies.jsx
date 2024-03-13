
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../util/constant';
import { addUpcomingMovies } from '../features/movie/movieSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    const upcomingMovies = useSelector((store)=> store?.movie?.upcomingMovies);
    const getUpcomingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
        const res = await data.json()
        // console.log(res.results);
        dispatch(addUpcomingMovies(res.results))
    }

    useEffect(()=>{
      !upcomingMovies &&  getUpcomingMovies()
    },[])
}

export default useUpcomingMovies
