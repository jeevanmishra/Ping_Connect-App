import { createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "./initial-states/AuthInitialState";

const authSlice = createSlice({
  name: "auth",
  initialState: {...authInitialState,theme:'dark'},
  reducers: {
    setAuthAndUser: (state, { payload, type }) => {
      return {...state,user:payload.user,token:payload.token}
    },
    setTheme:(state,{payload,type})=>{
      return {...state,theme:payload}
    }
  },
});

export const { setAuthAndUser,setTheme } = authSlice.actions;
export default authSlice.reducer;
