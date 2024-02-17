import { createSlice } from "@reduxjs/toolkit";


export const ImgSlice = createSlice({
    name:"img",
    initialState: {
        name:"",
        url:""
    },
    reducers:{
        chanegname: (state ,action) => {
            state.name = action.payload;
        },
        changeurl: (state ,action) =>{
            state.url = action.payload;
        }
    }
})


export  let {chanegname , changeurl} = ImgSlice.actions;

export default ImgSlice.reducer;
