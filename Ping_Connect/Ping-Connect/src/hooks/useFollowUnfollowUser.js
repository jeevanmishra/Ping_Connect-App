import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/usersSlice";
import { setFollowUser, setUnfollowUser } from "../services/user-services";
import { setUserToLocalStorage } from "../services/localstorage-service";
import { toast } from "react-hot-toast";
import { setAuthAndUser } from "../store/authSlice";
import { errorHandler } from "../services/common-util";
import { useState } from "react";

const useFollowUnfollowUser = () => {
  const dispatch = useDispatch();
  const [disableButton, setDisableButton] = useState(false);
  const token = useSelector((store) => store.auth.token);

  const followUser = async (id) => {
    setDisableButton(true);
    try {
      const {
        data: { user, followUser },
      } = await setFollowUser(id);
      setUserToLocalStorage(user);
      toast.success("User Followed");
      dispatch(setAuthAndUser({ token: token, user: user }));
      dispatch(updateUser([user, followUser]));
    } catch (error) {
      errorHandler(error);
    }
    setDisableButton(false);
  };

  const unfollowUser = async (id) => {
    setDisableButton(true);
    try {
      const {
        data: { user, followUser },
      } = await setUnfollowUser(id);
      setUserToLocalStorage(user);
      toast.success("User Unfollowed");
      dispatch(setAuthAndUser({ token: token, user: user }));
      dispatch(updateUser([user, followUser]));
    } catch (error) {
      errorHandler(error);
    }
    setDisableButton(true);
  };

  return { followUser, unfollowUser, disableButton };
};

export default useFollowUnfollowUser;
