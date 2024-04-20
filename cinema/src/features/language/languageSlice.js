import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    changeLanguage : "en",
}

export const languageSlice = createSlice({
    name : "language",
    initialState,
    reducers : {
        addLanguage : (state , actions) => {
            state.changeLanguage = actions.payload
        },
    }
})

export const {addLanguage} = languageSlice.actions;
export default languageSlice.reducer;