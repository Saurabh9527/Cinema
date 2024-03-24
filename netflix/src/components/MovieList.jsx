
import React from 'react'
import { useSelector } from 'react-redux'
import MovieCards from './MovieCards';

const MovieList = ({ title, movies }) => {
    if (!movies) return;
    return (
        <div className='my-20 md:mx-6 md:mb-6' >
            <h1 className='text-xl mx-2  mb-1 font-semibold text-gray-100 md:font-bold md:text-2xl md:mb-2 md:mx-2'>{title}</h1>
            <div className='cursor-pointer'>
                <div className='flex overflow-x-scroll' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                    {movies.map((movie) => (
                    <MovieCards key={movie.id} posterPath={movie.poster_path} movieId={movie.id} title={movie.title} release_date={movie.release_date} rating = {movie.vote_average} popularity = {movie.popularity} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList
