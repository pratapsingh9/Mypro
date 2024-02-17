import {createSlice} from '@reduxjs/toolkit';


export const UserLoginSlices = createSlice({
    name:"user",
    initialState:{
        username:"",
        name:"",
        password:"",
        file:""
    },
    reducers: {
        setusername:(state,action) => {
            state.username = action.payload
        },
        setname:(state,action) => {
            state.name = action.payload
        },
        setpassword:(state,action) => {
            state.password = action.payload
        },
        setfile:(state,action) => {
            state.file = action.payload
        }
    }
})


export let{ setusername , setname , setpassword , setfile} = UserLoginSlices.actions;

export default UserLoginSlices.reducer;