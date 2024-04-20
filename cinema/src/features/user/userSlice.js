import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails : null,
}
export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers: {
        addUser: (state , actions)=>{
            state.userDetails = actions.payload;
        },
        removeUser: (state)=>{
            state.userDetails =null;
        }
    }
})

export const {addUser , removeUser} = userSlice.actions

export default userSlice.reducer;