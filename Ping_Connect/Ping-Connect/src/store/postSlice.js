import { createSlice } from "@reduxjs/toolkit";
import { postInitialState } from "./initial-states/PostInitialState";

const postSlice=createSlice({
    name:'post',
    initialState:postInitialState,
    reducers:{
        setPosts:(state,{payload})=>{
            return {...state,posts:payload}
        },
        setUserFeed:(state,{payload})=>{
            return {...state,currentUserFeed:payload}
        },
        setBookmarks:(state,{payload})=>{
            return {...state,bookmarks:payload}
        },
        setSorts:(state,{payload})=>{
            return {...state,current_sortby:payload}
        }
    }
})

export const {setBookmarks,setPosts,setSorts,setUserFeed}=postSlice.actions
export default postSlice.reducer