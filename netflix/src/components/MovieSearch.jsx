
import React from 'react'
import SearchBar from './SearchBar'
import MovieSuggetion from './MovieSuggetion'

const MovieSearch = () => {
  return (
    <div className='bg-white'>
      <SearchBar/>
      <MovieSuggetion/>
    </div>
  )
}

export default MovieSearch
