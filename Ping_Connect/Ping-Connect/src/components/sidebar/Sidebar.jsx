import { MdOutlineExplore } from "react-icons/md";
import {
  UserCircleIcon,
  BookmarkIcon,
  HomeIcon,
  ArrowRightOnRectangleIcon,
  PlusIcon
} from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";
import {  useState } from "react";
import CustomDialog from './../dialog/CustomDialog';
import PostWrite from "../post-write/PostWrite";
import { useSelector } from "react-redux";
import useUserLogout from "../../hooks/useUserLogout";
const Sidebar = () => {
  const {
    user
 } = useSelector(store => store.auth);
 const handleUserLogout=useUserLogout()
  const [showModal, setShowModal] = useState(false)
  const { firstName, lastName, username, profilePic } = user;
  return (
    <div className="hidden h-screen md:block">
      <div className="flex flex-col h-full">
        <div className="flex-1 space-y-1">
          <NavLink
            href="/home"
            className="items-center hidden px-2 m-0 text-sm font-medium text-gray-900 rounded-md lg:pt-4 lg:flex group"
          >
            <img
              className="w-32 h-10"
              src="https://res.cloudinary.com/dkay6uocg/image/upload/v1688300852/logo-no-background_phu1yy.png"
              alt="ping-connect"
            />
          </NavLink>
          {/* Nav Links */}
          <div className="m-0 lg:pt-4">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `flex justify-center lg:justify-normal px-2 py-4 ${isActive
                  ? "bg-orange-200/40 dark:bg-stone-600/10 dark:text-gray-100 font-medium"
                  : "font-medium  dark:text-gray-50"
                } space-x-4 text-xl rounded-md text-gray-700 dark:hover:bg-stone-500 hover:bg-orange-200/80 group`
              }
            >
              <HomeIcon className="w-8 h-8 text-gray-700 dark:text-gray-50" />
              <p className="hidden lg:block">Home</p>
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `flex justify-center lg:justify-normal px-2 py-4 ${isActive
                  ? "bg-orange-200/40 dark:bg-stone-600/10 dark:text-gray-100 font-medium"
                  : "font-medium  dark:text-gray-50"
                } space-x-4 text-xl rounded-md text-gray-700 dark:hover:bg-stone-500 hover:bg-orange-200/80 group`
              }
            >
              <MdOutlineExplore className="w-8 h-8 text-gray-700 dark:text-gray-50" />
              <p className="hidden lg:block">Explore</p>
            </NavLink>
            <NavLink
              to="/bookmark"
              className={({ isActive }) =>
                `flex justify-center lg:justify-normal px-2 py-4 ${isActive
                  ? " bg-orange-200/40 dark:bg-stone-600/10 dark:text-gray-100 font-medium"
                  : "font-medium  dark:text-gray-50"
                } space-x-4 text-xl rounded-md text-gray-700 dark:hover:bg-stone-500 hover:bg-orange-200/80 group`
              }
            >
              <BookmarkIcon className="w-8 h-8 text-gray-700 dark:text-gray-50" />
              <p className="hidden lg:block">Bookmarks</p>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex justify-center lg:justify-normal items-center px-2 py-4 ${isActive
                  ? " bg-orange-200/40 dark:bg-stone-600/10 dark:text-gray-100 font-medium"
                  : "font-medium  dark:text-gray-50"
                } space-x-4 text-xl rounded-md text-gray-700 dark:hover:bg-stone-500 hover:bg-orange-200/80 group`
              }
            >
              <UserCircleIcon className="w-8 h-8 text-gray-700 dark:text-gray-50" />

              <p className="hidden lg:block">Profile</p>
            </NavLink>

            <button
              onClick={() => setShowModal(true)}
              type="button"
              className="inline-flex items-center justify-center p-4 mt-4 mb-2 mr-2 text-2xl font-medium tracking-wide text-center capitalize rounded-full lg:px-0 lg:py-4 lg:space-x-4 lg:w-full lg:rounded-md text-gray-50 dark:text-gray-50 bg-gradient-to-br dark:from-stone-500 dark:to-stone-700 from-orange-300 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-stone-500 group"
            >
              <span className="hidden lg:block">Write</span>
              <PlusIcon className="hidden w-6 h-6 m-0 transition-transform sm:block lg:hidden group-hover:rotate-45" />
            </button>
            {/* creating a portal and opening a modal */}
            {
              showModal &&
              <CustomDialog
                showModal={showModal}
                setShowModal={setShowModal} >
                <section className="flex w-full rounded-xl">  
                <PostWrite closeModal={setShowModal} post={{}} /></section>
              </CustomDialog>
            }
          </div>
        </div>

        <div className="hidden py-4 border-t border-orange-200 lg:block dark:border-stone-600">
          <div className="flex items-center justify-between w-full ">
            <div className="flex items-center justify-center space-x-2">
              <img
                className="rounded-full w-14 h-14"
                src={profilePic}
                alt="avatar"
              />
              <div className="flex flex-col items-start justify-start">
                <p className="text-base font-semibold leading-5 text-gray-900 cursor-pointer dark:text-white">{`${firstName} ${lastName}`}</p>
                <p className="text-xs font-medium leading-3 text-gray-800 cursor-pointer dark:text-gray-100">
                  {username}
                </p>
              </div>
            </div>
            <ArrowRightOnRectangleIcon
              onClick={handleUserLogout}
              className="w-6 h-6 text-gray-800 cursor-pointer dark:text-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
