
import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondayMainComponent = () => {
  const movies = useSelector((store) => store?.movie);
  if (!movies) return;
  return (
    <div className='bg-slate-950'>
      <div className='-mt-20'>
        <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovie} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondayMainComponent
