import { createSlice } from "@reduxjs/toolkit";
import { usersInitialState } from "./initial-states/UsersInitialState";

const userSlice=createSlice({
    name:'users',
    initialState:usersInitialState,
    reducers:{
        updateUser:(state,{type,payload})=>{
            return {...state,users: updateUsersData(payload, state.users)}
        },
        setAllUsers:(state,{type,payload})=>{
            return { ...state, users: payload };
        },
        setCurrentPage:(state,{type,payload})=>{
            return {...state,currentPage:payload}
        }
    }
})

export const {updateUser,setAllUsers,setCurrentPage}=userSlice.actions
export default userSlice.reducer;

const updateUsersData = (payload, state) => {
    return state.map((ele) => {
      const foundObj = payload.find(({ _id }) => _id === ele._id);
      return foundObj ? foundObj : ele;
    });
  };