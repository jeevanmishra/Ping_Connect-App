import axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";
import { DEFAULT_HEADERS } from "./common-util";

export const getAllUsersList = () => axios.get(ENDPOINTS.ALL_USERS);

export const setFollowUser = (userId) =>
  axios.post(`${ENDPOINTS.FOLLOW_USER}/${userId}`, {}, DEFAULT_HEADERS());

export const setUnfollowUser = (userId) =>
  axios.post(`${ENDPOINTS.UNFOLLOW_USER}/${userId}`, {}, DEFAULT_HEADERS());

