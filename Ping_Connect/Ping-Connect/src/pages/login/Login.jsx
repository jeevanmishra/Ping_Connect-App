import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { getAuthFromLocalStorage, setAuthToLocalStorage, setUserToLocalStorage } from "../../services/localstorage-service";
import { authInitialState } from "../../store/initial-states/AuthInitialState";
import { getLoginUser } from "../../services/auth-services";
import { errorHandler } from "../../services/common-util";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthAndUser } from "../../store/authSlice";
const testUser = {
  username: "alice@example.com",
  password: "alice123",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    document.title = "LOGIN | PING CONNECT";
    getAuthFromLocalStorage() !== null
      ? navigate("/home")
      : dispatch(setAuthAndUser(authInitialState));
  }, [dispatch, navigate]);

  const submitHandlerFn = (e) => {
    e.preventDefault();
    handleUserLogin(loginState);
  };

  const changeHandlerFn = (e) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  };

  const testUserHandler = (e) => {
    setLoginState(testUser);
    handleUserLogin(testUser);
  };

  const handleLoggedInUser = (token, user) => {
    const updatedUser = {
      ...user,
      profilePic:
        user.profilePic === ""
          ? "https://source.unsplash.com/random/900x700/?profile"
          : user.profilePic,

      banner:
        user.banner === ""
          ? "https://source.unsplash.com/random/1080x720/?minimalistic"
          : user.banner,
    };
    dispatch(setAuthAndUser({
      user: updatedUser,
      token,
    }))
    setUserToLocalStorage(updatedUser);
    setAuthToLocalStorage(token);
  };

  const handleUserLogin = async (payload) => {
    try {
      const {
        data: { encodedToken, foundUser },
      } = await getLoginUser(payload);
      handleLoggedInUser(encodedToken, foundUser);
      navigate("/home");
      toast.success(`Hello ${foundUser?.firstName ?? "User"}`);
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 pt-32 mx-auto overflow-hidden md:pt-0 md:h-screen lg:py-0">
      <div className="w-full bg-orange-200 border border-gray-300 rounded-lg shadow dark:border-stone-700 dark:bg-stone-700/40 md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-32 h-10"
              src="https://res.cloudinary.com/dkay6uocg/image/upload/v1688300852/logo-no-background_phu1yy.png"
              alt="ping-connect"
            />
            <h1 className="mt-4 text-xl font-bold leading-tight tracking-tight text-center text-gray-700 dark:text-gray-50 md:text-2xl">
              Sign In
            </h1>
          </div>
          <form onSubmit={submitHandlerFn} className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50"
              >
                Username
              </label>
              <input
                type="username"
                name="username"
                id="username"
                value={loginState.username}
                onChange={changeHandlerFn}
                className="border sm:text-sm font-medium rounded-lg block w-full p-2.5 bg-orange-50 dark:bg-stone-900 border-orange-200 placeholder-gray-500 text-gray-700 dark:text-gray-50 focus:ring-orange-200 focus:border-orange-200 
               dark:focus:ring-stone-500 dark:focus:border-stone-500 
                dark:border-stone-500"
                placeholder="abc@email.com"
                required={true}
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50"
              >
                Password
              </label>

              {showPassword ? (
                <EyeIcon
                  onClick={() => setShowPassword(false)}
                  className="absolute w-6 h-6 text-gray-500 dark:text-gray-300cursor-pointer right-2 bottom-2"
                />
              ) : (
                <EyeSlashIcon
                  onClick={() => setShowPassword(true)}
                  className="absolute w-6 h-6 text-gray-500 dark:text-gray-300cursor-pointer right-2 bottom-2"
                />
              )}
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                minLength="6"
                value={loginState.password}
                onChange={changeHandlerFn}
                placeholder="••••••••"
                className="border sm:text-sm font-medium rounded-lg block w-full p-2.5 bg-orange-50 dark:bg-stone-900 border-orange-200 placeholder-gray-500 text-gray-700 dark:text-gray-50 focus:ring-orange-200 focus:border-orange-200 
                dark:focus:ring-stone-500 dark:focus:border-stone-500 
                 dark:border-stone-500"
                required={true}
              />
            </div>

            <button
              type="submit"
              className="w-full px-5 py-3 text-sm font-medium text-center text-gray-700 bg-orange-300 border-2 border-orange-200 rounded-lg dark:text-gray-50 dark:bg-stone-900 dark:border-stone-700 focus:ring-4 focus:outline-none hover:bg-orange-400 hover:text-gray-100 focus:ring-orange-200"
            >
              Sign in
            </button>

            <button
              onClick={testUserHandler}
              type="button"
              className="w-full px-5 py-3 text-sm font-medium text-center text-gray-700 bg-gray-100 rounded-lg dark:text-gray-700 focus:ring-4 focus:outline-none dark:hover:bg-stone-700 hover:text-gray-100 dark:hover:text-gray-100 hover:bg-orange-300 focus:ring-orange-200"
            >
              Test User
            </button>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-100">
              Don't have an account yet?
              <Link
                to="/sign-up"
                className="ml-2 font-medium text-gray-900 dark:text-white hover:underline"
              >
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
