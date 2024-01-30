/* eslint-disable jsx-a11y/alt-text */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  XMarkIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useUserLogout from "../../hooks/useUserLogout";
import useToggleMobileSidebar from "../../hooks/useToggleMobileSidebar";

const MobileSidebar = () => {
  const handleUserLogout = useUserLogout()
  const {mobileSidebar,setMobileSidebar}=useToggleMobileSidebar()
  const {
    user
  } = useSelector(store => store.auth);
  const navigate = useNavigate();
  const handleProfileRedirect = () => {
    setMobileSidebar(false)
    navigate("/profile");
  };
  return (
    <Transition.Root show={mobileSidebar} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() =>
          setMobileSidebar(false)
        }
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 left-0 flex max-w-full pl-10 pointer-events-none">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                  <div className="flex flex-col h-full overflow-y-scroll shadow-xl bg-orange-50 dark:bg-stone-900">
                    <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-700 dark:text-gray-50">
                          <p className="font-bold tracking-tight uppercase text-normal">
                            {user.firstName} {user.lastName}{" "}
                          </p>
                        </Dialog.Title>
                        <div className="flex items-center ml-3 h-7">
                          <button
                            type="button"
                            className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                            onClick={() =>
                              setMobileSidebar(false)
                            }
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <img
                            className="w-full max-w-full rounded-md h-36 lg:h-60"
                            src={
                              user?.banner === ""
                                ? "https://source.unsplash.com/random/1080x720/?minimalistic"
                                : user?.banner
                            }
                          />

                          <div className="absolute right-0 flex items-center justify-between w-full p-6 top-40 lg:top-40">
                            <img
                              className="w-20 h-20 border-4 border-orange-100 rounded-full bg-orange-50 dark:bg-stone-900 lg:h-28 lg:w-28"
                              src={
                                user?.profilePic === ""
                                  ? "https://source.unsplash.com/random/900x700/?profile"
                                  : user.profilePic
                              }
                              alt="avatar"
                            />
                            <button
                              onClick={handleProfileRedirect}
                              className="px-4 py-2 text-sm font-medium text-center text-gray-100 bg-orange-400 rounded-md shadow cursor-pointer dark:bg-stone-700 dark:hover:bg-stone-600 hover:text-gray-100 hover:bg-orange-400/95"
                            >
                              Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-6 mb-20 sm:px-6">
                      <div className="mt-6 space-y-4">
                        <button
                          onClick={() => {
                            setMobileSidebar(false)
                            handleUserLogout()
                          }}
                          className="inline-flex items-center justify-center w-full col-span-2 px-6 py-3 text-sm font-medium text-center text-gray-700 border rounded-md shadow dark:text-gray-700 dark:hover:bg-stone-700 dark:hover:text-gray-100 hover:text-gray-100 bg-gray-50 hover:bg-orange-400/80"
                        >
                          Log Out
                          <ArrowRightOnRectangleIcon className="w-6 h-6 ml-2 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileSidebar;
