
import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MainComponent from './MainComponent'
import useNowPlayingMovie from '../Hooks/useNowPlayingMovie'
import SecondayMainComponent from './SecondayMainComponent'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'
import MovieSearch from './MovieSearch'

const Browse = () => {

  const user = useSelector((store) => store.user.userDetails);
  const navigate = useNavigate();
  const gptSearch = useSelector((store) => store?.search?.toggleSearch)

  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  }, [])

  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <div>
        <Header />
        {gptSearch
          ?
          (
            <MovieSearch />
          ) 
          : 
          (
            <>
              <MainComponent />
              <SecondayMainComponent />
            </>
          )}
      </div>
    </>

  )
}

export default Browse
