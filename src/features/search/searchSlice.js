import { createSlice } from "@reduxjs/toolkit";



const initialState={
    searchInput:''
}

const searchSlice = createSlice({
 name:'search',
 initialState,
 reducers:{
    setToSearch:(state,action)=>{
        state.searchInput=action.payload;
    }
 }   
})

export const {setToSearch} = searchSlice.actions;

export default searchSlice.reducer;