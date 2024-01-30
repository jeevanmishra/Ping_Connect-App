import { useDispatch } from "react-redux";
import { setAuthAndUser } from "../store/authSlice";
import { authInitialState } from "../store/initial-states/AuthInitialState";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../services/localstorage-service";

const useUserLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserLogout=()=>{
  handleLogout();
  dispatch(setAuthAndUser(authInitialState));
  navigate("/login");
  }
  return handleUserLogout
};

export default useUserLogout;
