import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../util/constant';
import { addMovieTrailor } from '../features/movie/movieSlice';

const useMovieTrailor = (movieId) => {
    const dispatch = useDispatch();
    const trailer = useSelector((store)=> store?.movie?.movieTrailer);

    const getTrailer = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
        const res = await data.json()
        // console.log(res);
        const trailer = res.results.filter((m)=>m.type === "Trailer")
        // console.log(trailer);
        dispatch(addMovieTrailor(trailer.lengtn > 0 ? trailer[0] : res.results[0]));
    }

    useEffect(() => {
       !trailer &&  getTrailer()
    }, [])
}

export default useMovieTrailor
