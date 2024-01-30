/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, Routes } from "react-router-dom";
import PrimaryLayout from "./layout/primary-layout/PrimaryLayout";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import Home from "./pages/home/Home";
import CanActivate from "./components/can-activate/CanActivate";
import MockAPI from "./pages/mockman/Mockman";
import Explore from "./pages/explore/Explore";
import Bookmark from "./pages/bookmark/Bookmark";
import Profile from "./pages/profile/Profile";
import UserDetails from "./pages/user-details/UserDetails";
import { useEffect } from "react";
import {
  getAuthFromLocalStorage,
  getPreferedTheme,
  getUserFromLocalStorage,
  setThemeInLocalStorage,
} from "./services/localstorage-service";
import { useDispatch, useSelector } from "react-redux";
import { setAuthAndUser, setTheme } from "./store/authSlice";
import { getAllUsersList } from "./services/user-services";
import { setAllUsers } from "./store/usersSlice";
import { errorHandler } from "./services/common-util";
import { getAllPosts } from "./services/post-service";
import { setPosts, setUserFeed } from "./store/postSlice";
import useUsersUtility from "./hooks/useUsersUtility";

export default function App() {
  const dispatch = useDispatch();
  const { theme, token } = useSelector((store) => store.auth);
  const posts=useSelector(store=>store.post.posts);
  const {getUserAndFollowingsUsername}=useUsersUtility()
  useEffect(() => {
    if (token === null) return;
    const getAllUsers = async () => {
      try {
        const {
          data: { users },
        } = await getAllUsersList();
        dispatch(setAllUsers(users));
      } catch (error) {
        errorHandler(error);
      }
    };
    const getPosts = async () => {
      try {
        const {
          data: { posts },
        } = await getAllPosts();
        dispatch(setPosts(posts ));
      } catch (error) {
        errorHandler(error);
      }
    };
    getAllUsers();
    getPosts();
  }, [token]);

  useEffect(() => {
    if (posts && posts.length > 0) {
      const filterAllUserPostFeed = () => {
        const filteredPosts = posts.filter((post) =>
          getUserAndFollowingsUsername(getUserFromLocalStorage()).includes(post.username)
        );
        dispatch(setUserFeed(filteredPosts));
      };
      filterAllUserPostFeed();
    }
  }, [dispatch, getUserAndFollowingsUsername, posts]);

  useEffect(() => {
    if (
      getAuthFromLocalStorage() !== null &&
      Object.keys(getUserFromLocalStorage()).length > 0
    ) {
      dispatch(
        setAuthAndUser({
          user: getUserFromLocalStorage(),
          token: getAuthFromLocalStorage(),
        })
      );
    }
  }, []);

  useEffect(() => {
    if (!getPreferedTheme()) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      dispatch(setTheme(systemTheme));
      setThemeInLocalStorage(systemTheme);
    }
    dispatch(setTheme(getPreferedTheme()));
    const themeClassNameRender = () => {
      theme === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    };
    themeClassNameRender();
  }, [theme]);

  return (
    <div className="min-h-screen bg-orange-50 dark:bg-stone-900">
      <Routes>
        <Route
          path="/"
          element={
            <CanActivate>
              <PrimaryLayout />
            </CanActivate>
          }
        >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="user-details" element={<UserDetails />} />
          <Route path="explore" element={<Explore />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="mockman" element={<MockAPI />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </div>
  );
}
