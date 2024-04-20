
import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import Shimmer from './Shimmer';

const MovieSuggetion = () => {
  const movies = useSelector((store) => store?.search)
  const {movieNames , searchMovies } = movies;
  if(!searchMovies) return;
  if(!movieNames) return;

  return searchMovies.length < 5 ? (<Shimmer/>) : (
    <div className='bg-black'>
      <div className='relative bg-black bg-opacity-80 my-2 p-2  '>
        {movieNames.map((movieName , index)=><MovieList key={movieName} title ={movieName} movies= {searchMovies[index]}/>)}
      </div>
    </div>
  )
}

export default MovieSuggetion
