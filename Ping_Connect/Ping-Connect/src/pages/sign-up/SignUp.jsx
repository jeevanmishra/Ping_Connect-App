import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { getSignUpUser } from "../../services/auth-services";
import { setAuthToLocalStorage, setUserToLocalStorage } from "../../services/localstorage-service";
import { errorHandler } from "../../services/common-util";
import { setAuthAndUser } from "../../store/authSlice";
import { useDispatch } from "react-redux";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [signupState, setSignupState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",

  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  useEffect(() => {
    document.title = "SIGN UP | PING CONNECT"
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, firstName, lastName } = signupState;
    if (password !== confirmPassword) {
      toast.error("Password and Confirm password do not match");
      return;
    }
    handleUserSignUp({ username: email, password, firstName, lastName });
  };

  const changeHandlerFn = (e) => {
    setSignupState({ ...signupState, [e.target.name]: e.target.value });
  };

  const handleUserSignUp = async (payload) => {
    try {
      const {
        data: { encodedToken, createdUser },
      } = await getSignUpUser(payload);
      handleLoggedInUser(encodedToken, createdUser);
      navigate("/user-details");
      toast.success(`Hello ${createdUser?.firstName ?? "User"}`);
    } catch (error) {
      errorHandler(error);
    }
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

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 pt-8 mx-auto sm:pt-0 md:h-screen lg:py-0">
      <div className="w-full bg-orange-200 border border-gray-300 rounded-lg shadow dark:border-stone-700 dark:bg-stone-700/40 md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="flex flex-col items-center justify-center">
            <img className='w-32 h-10'
              src="https://res.cloudinary.com/dkay6uocg/image/upload/v1688300852/logo-no-background_phu1yy.png"
              alt="ping-connect"
            />
            <h1 className="mt-4 text-xl font-bold leading-tight tracking-tight text-center text-gray-700 dark:text-gray-50 md:text-2xl">

              Create an Account
            </h1>
          </div>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="sm:flex sm:space-x-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50"
                >
                  First Name
                </label>
                <input
                  onChange={changeHandlerFn}
                  value={signupState.firstName}
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="border sm:text-sm rounded-lg block font-medium w-full p-2.5 bg-orange-50 dark:bg-stone-900 border-orange-200 placeholder-gray-500 text-gray-700 dark:text-gray-50 focus:ring-orange-200 focus:border-orange-200
                    dark:focus:ring-stone-500 dark:focus:border-stone-500 
                dark:border-stone-500
                    "
                  placeholder="Jon"
                  required={true}
                />
              </div>
              <div className="mt-2 sm:mt-0">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50"
                >
                  Last Name
                </label>
                <input
                  onChange={changeHandlerFn}
                  value={signupState.lastName}
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="border sm:text-sm rounded-lg block font-medium w-full p-2.5 bg-orange-50 dark:bg-stone-900 border-orange-200 placeholder-gray-500 text-gray-700 dark:text-gray-50 focus:ring-orange-200 focus:border-orange-200
                    dark:focus:ring-stone-500 dark:focus:border-stone-500 
                dark:border-stone-500
                    "
                  placeholder="watts"
                  required={true}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50"
              >
                Your email
              </label>
              <input
                onChange={changeHandlerFn}
                value={signupState.email}
                type="email"
                name="email"
                id="email"
                className="border sm:text-sm rounded-lg block font-medium w-full p-2.5 bg-orange-50 dark:bg-stone-900 border-orange-200 placeholder-gray-500 text-gray-700 dark:text-gray-50 focus:ring-orange-200 focus:border-orange-200
                  dark:focus:ring-stone-500 dark:focus:border-stone-500 
                dark:border-stone-500
                  "
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
              {showPassword.password ? (
                <EyeIcon
                  onClick={() => setShowPassword({ ...showPassword, password: false })}
                  className="absolute w-6 h-6 text-gray-500 dark:text-gray-300cursor-pointer right-2 bottom-2"
                />
              ) : (
                <EyeSlashIcon
                  onClick={() => setShowPassword({ ...showPassword, password: true })}
                  className="absolute w-6 h-6 text-gray-500 dark:text-gray-300cursor-pointer right-2 bottom-2"
                />
              )}
              <input
                type={showPassword.password ? "text" : "password"}
                onChange={changeHandlerFn}
                value={signupState.password}
                name="password"
                minLength="6"
                id="password"
                placeholder="••••••••"
                className="border sm:text-sm font-medium rounded-lg block w-full p-2.5 bg-orange-50 dark:bg-stone-900 border-orange-200 placeholder-gray-500 text-gray-700 dark:text-gray-50 focus:ring-orange-200 focus:border-orange-200
                  dark:focus:ring-stone-500 dark:focus:border-stone-500 
                dark:border-stone-500
                  "
                required={true}
              />
            </div>
            <div className="relative">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50"
              >
                Confirm password
              </label>
              {showPassword.confirmPassword ? (
                <EyeIcon
                  onClick={() => setShowPassword({ ...showPassword, confirmPassword: false })}
                  className="absolute w-6 h-6 text-gray-500 dark:text-gray-300cursor-pointer right-2 bottom-2"
                />
              ) : (
                <EyeSlashIcon
                  onClick={() => setShowPassword({ ...showPassword, confirmPassword: true })}
                  className="absolute w-6 h-6 text-gray-500 dark:text-gray-300cursor-pointer right-2 bottom-2"
                />
              )}
              <input
                onChange={changeHandlerFn}
                value={signupState.confirmPassword}
                type={showPassword.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                minLength="6"
                id="confirmPassword"
                placeholder="••••••••"
                className="border sm:text-sm font-medium rounded-lg block w-full p-2.5 bg-orange-50 dark:bg-stone-900 border-orange-200 placeholder-gray-500 text-gray-700 dark:text-gray-50 focus:ring-orange-200 focus:border-orange-200
                  dark:focus:ring-stone-500 dark:focus:border-stone-500 
                dark:border-stone-500
                  "
                required={true}
              />
            </div>

            <button
              type="submit"
              className="w-full px-5 py-3 text-sm font-medium text-center text-gray-700 bg-orange-300 border-2 border-orange-200 rounded-lg dark:text-gray-50 dark:bg-stone-900 dark:border-stone-700 focus:ring-4 focus:outline-none hover:bg-orange-400 hover:text-gray-100 focus:ring-orange-200"
            >
              Create Account
            </button>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-50">
              Already have an account?
              <Link
                to="/login"
                className="ml-2 font-medium text-gray-900 dark:text-white hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
