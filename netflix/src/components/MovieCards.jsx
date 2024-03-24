
import React, { useEffect, useState } from 'react'
import { MOVIE_POSTER_PATH, options } from '../util/constant'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { addAllMovieTrailer, getId, removeId, removeMovieTrailer } from '../features/movie/movieSlice';

const MovieCards = ({ posterPath, movieId, title, release_date , rating , popularity }) => {

  const dispatch = useDispatch();
  const id = useSelector((store)=>store?.movie?.id)
  const trailer = useSelector((store)=>store?.movie?.allMovieTrailer);
  if (!posterPath) return null;

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isVideoDialogOpen, setVideoDialogOpen] = useState(false);

  const handleCardClick = () => {
    setDialogOpen(true)
    dispatch(getId(movieId))
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
    dispatch(removeId())
  }

  const handleOpenVideoDialog = () => {
    setVideoDialogOpen(true);
  };

  const handleCloseVideoDialog = () => {
    setVideoDialogOpen(false);
  };

  useEffect(()=>{
    const fetchTrailer = async() =>{
      if(id === null){
        dispatch(removeMovieTrailer())
        return ;
      }

      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      const res = await data.json();
      const trailer = res.results.filter((m)=>m.type === "Trailer")
      dispatch(addAllMovieTrailer(trailer.length > 0 ? (trailer[0]) : (trailer[0])))
    }
    fetchTrailer();
  } , [id])

  return (
    <>
      <img className='w-48 p-2 rounded-2xl'
        src={MOVIE_POSTER_PATH + posterPath}
        alt="Movie-Poster"
        onClick={handleCardClick}
      />

      <Dialog open={isDialogOpen} onClose={handleCloseDialog} className= 'mt-[25%] md:mt-0'>
        <DialogTitle>Movie Details</DialogTitle>
        <DialogContent>

          {posterPath &&
            (<div className='w-[280px] flex justify-center items-center mb-4 md:w-[350px] bg-gray-950 rounded-2xl'>
              <img className='h-[280px] w-[191px] pt-2 rounded-2xl '
                src={MOVIE_POSTER_PATH + posterPath}
                alt="Selected Movie Poster"
              />
            </div>)}
          <div>
            <p className='font-bold text-gray-700 italic'>Title : {title}</p>
            <p className='font-bold text-gray-700 italic '>Release Date : {release_date}</p>
            <p className='font-bold text-gray-700 italic '>IMDb Rating : {rating} / 10 ⭐</p>
            <p className='font-bold text-gray-700 italic mb-3'>Popularity : {popularity}♻️</p>
          <Button onClick={handleOpenVideoDialog} variant="contained" color="primary" className="mt-4">
            Watch Trailer
          </Button>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Close</Button>
      </DialogActions>
    </Dialog >

      <Dialog open={isVideoDialogOpen} onClose={handleCloseVideoDialog}>
        <DialogContent>
          <div className='w-[270px] md:w-[350px]'>
          <iframe
            className="w-[270px] h-[210px] md:w-[350px] md:h-[250px]"
            src={trailer && `https://www.youtube.com/embed/${trailer?.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"     
          ></iframe>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseVideoDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default MovieCards
