import { MdOutlineExplore } from "react-icons/md";
import { HiOutlineHome, HiOutlineBookmark } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-orange-100 border-t border-gray-400 dark:bg-stone-950">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <NavLink
          to="/home"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-orange-300 dark:hover:bg-stone-800 group"
        >
          <HiOutlineHome className="w-6 h-6 mb-2 text-gray-700 dark:text-gray-100 group-hover:text-orange-100" />

          {/* <span className="text-sm text-gray-700 dark:text-gray-100 group-hover:text-orange-100">
            Home
          </span> */}
        </NavLink>

        <NavLink
          to="/explore"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-orange-300 dark:hover:bg-stone-800 group"
        >
          <MdOutlineExplore className="w-6 h-6 mb-2 text-gray-700 dark:text-gray-100 group-hover:text-orange-100" />

          {/* <span className="text-sm text-gray-700 dark:text-gray-100 group-hover:text-orange-100">
            Explore
          </span> */}
        </NavLink>

        <NavLink
          to="/bookmark"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-orange-300 dark:hover:bg-stone-800 group"
        >
          <HiOutlineBookmark className="w-6 h-6 mb-2 text-gray-700 dark:text-gray-100 group-hover:text-orange-100" />

          {/* <span className="text-sm text-gray-700 dark:text-gray-100 group-hover:text-orange-100">
            Bookmarks
          </span> */}
        </NavLink>
        
        {/* <NavLink
          to="/profile"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-orange-300 dark:hover:bg-stone-800 group"
        >
          <CgProfile className="w-6 h-6 mb-2 text-gray-700 dark:text-gray-100 group-hover:text-orange-100" />

          <span className="text-sm text-gray-700 dark:text-gray-100 group-hover:text-orange-100">
            Profile
          </span>
        </NavLink> */}
      </div>
    </div>
  );
};

export default MobileNavigation;
