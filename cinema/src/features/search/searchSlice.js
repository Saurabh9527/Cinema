import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleSearch : false,
    movieNames : null,
    searchMovies : null,
}
export const searchSlice = createSlice({
    name : "search",
    initialState,
    reducers : {
        toggleSearchButton : (state , actions)=>{
            state.toggleSearch = !state.toggleSearch;
        },
        addMovieNames : (state , actions) => {
            state.movieNames = actions.payload;
        },
        addSearchMovies : (state , actions) => {
            state.searchMovies = actions.payload;
        }
    }
})

export const {toggleSearchButton , addSearchMovies , addMovieNames} = searchSlice.actions;
export default searchSlice.reducer