

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovie : null,
    popularMovies : null,
    topRatedMovies : null,
    upcomingMovies : null,
    movieTrailer : null,
    id : null,
    allMovieTrailer : null,
}
export const movieSlice = createSlice({
    name : "movie",
    initialState,
    reducers: {
        addNowPlayingMovie : (state , actions)=>{
            state.nowPlayingMovie = actions.payload
        },
        addMovieTrailor : (state , actions) =>{
            state.movieTrailer = actions.payload;
        },
        addPopularMovies : (state , actions)=>{
            state.popularMovies = actions.payload;
        },
        addTopRatedMovies : (state , actions)=>{
            state.topRatedMovies = actions.payload;
        },
        addUpcomingMovies : (state , actions)=>{
            state.upcomingMovies = actions.payload;
        },
        getId : (state , actions) =>{
            state.id = actions.payload;
        },
        removeId : (state , actions) => {
            state.id =null;
        },
        addAllMovieTrailer : (state , actions) => {
            state.allMovieTrailer = actions.payload;
        },
        removeMovieTrailer : (state , actions) =>{
            state.allMovieTrailer = null;
        }
    
    }
})

export const {addNowPlayingMovie , addMovieTrailor ,addPopularMovies , addTopRatedMovies , addUpcomingMovies , getId , addAllMovieTrailer , removeId , removeMovieTrailer} = movieSlice.actions

export default movieSlice.reducer;