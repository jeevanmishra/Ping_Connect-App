import { Popover, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { getUserFromLocalStorage } from "../../services/localstorage-service";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import CustomDialog from "../dialog/CustomDialog";
import PostWrite from "../post-write/PostWrite";
import useFollowUnfollowUser from "../../hooks/useFollowUnfollowUser";
import useUsersUtility from "../../hooks/useUsersUtility";
import usePostsOperations from "../../hooks/usePostsOperations";

const PostCardMenu = ({ post }) => {
  const { username, _id } = post;
  const [showModal, setShowModal] = useState(false)
  const { getUsersFollowersList, getUsersFollowingList,getUserByUsername } =
    useUsersUtility();
const {handleDeletePost}=usePostsOperations()
  const followers = getUsersFollowersList(getUserFromLocalStorage());
  const following = getUsersFollowingList(getUserFromLocalStorage());
  const currentUser = getUserFromLocalStorage().username;
  const { followUser, unfollowUser } = useFollowUnfollowUser()
  const handleFollow = () => {
    followUser(getUserByUsername(username)._id);
  };

  const handleUnfollow = () => {
    unfollowUser(getUserByUsername(username)._id);
  };
  return (
    <>
      <Popover className="relative">
        <Popover.Button className="focus:outline-0">
          <EllipsisVerticalIcon
            title="Options"
            className="p-2 text-gray-600 bg-orange-100 rounded-full cursor-pointer dark:text-gray-100 w-9 h-9 hover:text-gray-800 dark:bg-stone-600 dark:hover:bg-stone-500 hover:bg-orange-200"
          />
        </Popover.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 relative z-[1] opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Popover.Panel className="absolute right-0 text-gray-600 border border-gray-300 rounded-md shadow-sm w-36 bg-orange-50 dark:border-stone-500 dark:text-gray-100 dark:bg-stone-900">
            <div className="text-sm font-semibold">
              {username !== currentUser && !following.includes(username) && (
                <Popover.Button
                  onClick={() => handleFollow(_id)}
                  className="flex w-full px-8 py-3 text-left text-gray-700 border-gray-100 rounded dark:text-gray-50 hover:bg-orange-200 dark:hover:bg-stone-700 dark:border-stone-700 hover:text-gray-800"
                >
                  {followers.includes(username) ? "Follow Back" : "Follow"}
                </Popover.Button>
              )}

              {following.includes(username) && (
                <Popover.Button
                  onClick={handleUnfollow}
                  className="flex w-full px-8 py-3 text-left text-gray-700 border-gray-100 rounded dark:text-gray-50 hover:bg-orange-200 dark:hover:bg-stone-700 dark:border-stone-700 hover:text-gray-800"
                >
                  Unfollow
                </Popover.Button>
              )}
              {username === currentUser && (
                <>
                  <Popover.Button
                    onClick={() => setShowModal(true)}
                    className="flex items-center w-full px-8 py-3 text-gray-700 rounded dark:text-gray-50 hover:bg-orange-200 dark:hover:bg-stone-700 dark:border-stone-700 hover:text-gray-800"
                  >
                    <PencilSquareIcon className="w-5 h-5 mr-1 text-gray-500" />
                    Edit
                  </Popover.Button>

                  <Popover.Button
                    onClick={() => handleDeletePost(_id)}
                    className="flex items-center w-full px-8 py-3 text-red-500 rounded hover:bg-orange-200 dark:hover:bg-stone-700 dark:border-stone-700 hover:text-red-600"
                  >
                    <TrashIcon className="w-5 h-5 mr-1 text-red-500" />
                    Delete
                  </Popover.Button>
                </>
              )}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      {/* creating a portal and opening a modal */}
      {
        showModal && <CustomDialog
          showModal={showModal}
          setShowModal={setShowModal}>
          <section className="flex w-full rounded-xl">  <PostWrite post={post}
            closeModal={setShowModal}
          /></section>
        </CustomDialog>
      }
    </>
  );
};

export default PostCardMenu;
