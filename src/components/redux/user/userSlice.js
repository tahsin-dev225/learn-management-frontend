import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk("addUser", async(newUser,{rejectWithValue})=>{
    try {
        const resp = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/users`,newUser , {withCredentials : true} )
        // console.log('request hoise', resp)
        return resp.data;
    } catch (error) {
        console.log('error form user slice catch' , error)
        return rejectWithValue(error.response?.data || error.message)
    }
})

export const logUser = createAsyncThunk("logUser", async(email,{rejectWithValue})=>{
    try {
        const resp = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${email}` , {withCredentials : true} )
        return resp.data;
    } catch (error) {
        console.log('error form user slice catch' , error)
        return rejectWithValue(error.response?.data || error.message)
    }
})

export const isLoggedUser = createAsyncThunk("isLoggedUser", async(email,{rejectWithValue})=>{
    try {
        const resp = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${email}` , {withCredentials : true} )
        return resp.data;
    } catch (error) {
        console.log('error form user slice catch' , error)
        return rejectWithValue(error.response?.data || error.message)
    }
})

export const getUser = createAsyncThunk("getUser", async(currentUser,{rejectWithValue})=>{
    try {
        // const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {withCredentials : true})
        // console.log(currentUser,'cooro')
        return currentUser
    } catch (error) {
        console.log('error form user slice catch' , error)
        return rejectWithValue(error.response?.data || error.message)
    }
})

const userSlice = createSlice({
    name : 'user',
    initialState :{
        data : null,
        userData : null,
        isAdmin : null,
        allUsers : null,
        isLoading : true,
        isLogged : false,
        isloggedError : false,
        isLoggedUser : null,
        isLoggedUserError : false,
        loggedUserErrorMessage : false,
        errorMesage : null,
        userInfo : null
    },
    reducers : {
        removeLoggedError : (state , action)=>{
            state.isLogged = false;
            state.isloggedError = false;
            state.errorMesage = false;
            state.loggedUserErrorMessage = false;
            state.userInfo = null;
            state.isLoggedUser =  null
        } 
    },
    extraReducers : (builder) =>{
        builder.addCase(addUser.fulfilled , (state,action)=>{
            state.data = action.payload;
        })
        builder.addCase(addUser.rejected , (state,action)=>{
            console.log(action.payload)
        })

        builder.addCase(logUser.fulfilled , (state,action)=>{
            state.isLogged = true;
            state.userInfo = action.payload;
        })
        builder.addCase(logUser.rejected , (state,action)=>{
            state.isloggedError = true;
            state.errorMesage = action.payload
        })

        builder.addCase(isLoggedUser.fulfilled , (state,action)=>{
            state.isLoggedUser = true;
            state.userInfo = action.payload;
        })
        builder.addCase(isLoggedUser.rejected , (state,action)=>{
            state.isLoggedUserError = true;
            state.loggedUserErrorMessage = action.payload
        })

        builder.addCase(getUser.pending , (state,action)=>{
            state.isLoading = true
            // console.log('getUser pending true' )
        })
        builder.addCase(getUser.fulfilled , (state,action)=>{
            state.userData = action.payload;
            state.isLoading = false
            // console.log('getUser filfild flase',action.payload)
        })
        builder.addCase(getUser.rejected , (state,action)=>{
            // state.userData = action.payload;
            state.isLoading = false
            console.log('getUser filfild flase')
        })
    }
})

export const {removeLoggedError} = userSlice.actions

export default userSlice.reducer