import axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";
import { DEFAULT_HEADERS } from "./common-util";

export const getLoginUser=(payload)=> axios.post(ENDPOINTS.LOGIN,payload)

export const getSignUpUser=(payload)=> axios.post(ENDPOINTS.SIGNUP,payload)

export const editUser = (payload) =>
   axios.post(ENDPOINTS.EDIT_USER, payload, DEFAULT_HEADERS())