/* eslint-disable jsx-a11y/img-redundant-alt */

import {  useEffect } from "react";
import PostCard from "../../components/post-card/PostCard";
import { useState } from "react";
import Tabs from "../../components/tabs/Tabs";
import { LinkIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import RecommandedUsers from "../../components/recommanded-users/RecommandedUsers";
import NoDataAvailable from "../../components/no-data-available/NoDataAvailable";
import CustomDialog from "../../components/dialog/CustomDialog";
import EditProfileForm from './../../components/edit-profile-form/EditProfileForm';
import { useDispatch, useSelector } from "react-redux";
import useFollowUnfollowUser from "../../hooks/useFollowUnfollowUser";
import useUsersUtility from "../../hooks/useUsersUtility";
import { setCurrentPage } from "../../store/usersSlice";
const Profile = () => {
  const [selectedUser, setSelectedUser] = useState({});
  const [toggleEditProfile, setToggleEditProfile] = useState(false);
  const user=useSelector(store=>store.auth.user)
    const posts=useSelector(store=>store.post.posts)
  const location = useLocation();
  const {
    getUsersFollowingList,
  } = useUsersUtility();

  const dispatch=useDispatch()
  const {followUser,unfollowUser,disableButton}=useFollowUnfollowUser()
  const {getUserByUsername}=useUsersUtility()
  useEffect(() => {
    document.title = "PROFILE | PING CONNECT";
    if (location?.state !== null) {
      setSelectedUser(getUserByUsername(location?.state?.username));
    } else {
      setSelectedUser(user);
    }
  }, [getUserByUsername, location?.state, user]);
  useEffect(() => {
    dispatch(setCurrentPage("profile" ));
  }, [dispatch]);

  const followingList = getUsersFollowingList(user);

  const currentUsersPosts = posts.filter(
    (post) => post?.username === selectedUser?.username
  );
  // For tabs set-up
  const [currentTab, setCurrentTab] = useState("posts");
  const tabTypes = ["posts", "followers", "following"];

  const handleTabChange = (e) => {
    switch (e) {
      case 0:
        setCurrentTab("posts");
        break;

      case 1:
        setCurrentTab("followers");
        break;

      case 2:
        setCurrentTab("following");
        break;

      default:
        break;
    }
  };

  const handleProfileMainCTA = () => {
    if (selectedUser?.username === user?.username)
      return { title: "Edit Profile", cta: () => setToggleEditProfile(true)};
    if (followingList.includes(selectedUser?.username))
      return { title: "Unfollow", cta: unfollowUser };
    return { title: "Follow", cta: followUser };
  };

  return (
    <>
      <div className="relative mb-16 lg:mb-0">
        <img
          className="w-full h-40 max-w-full rounded-md lg:h-60"
          src={
            selectedUser?.banner === ""
              ? "https://source.unsplash.com/random/1080x720/?minimalistic"
              : selectedUser?.banner
          }
          alt="image description"
        />

        <div className="absolute flex items-center justify-between w-full p-6 top-24 lg:top-40">
          <img
            className="w-20 h-20 border-4 border-orange-100 rounded-full bg-orange-50 dark:bg-stone-900 lg:h-28 lg:w-28"
            src={
              selectedUser?.profilePic === ""
                ? "https://source.unsplash.com/random/900x700/?profile"
                : selectedUser?.profilePic
            }
            alt="avatar"
          />
          <button
            disabled={disableButton}
            onClick={() => handleProfileMainCTA().cta(selectedUser._id)}
            className={`px-4 py-2 text-sm font-medium text-center text-gray-100   dark:hover:bg-stone-600 dark:bg-stone-700 bg-orange-400 rounded-md shadow hover:text-gray-100 hover:bg-orange-400/95 ${disableButton ? " cursor-not-allowed" : "cursor-pointer"
              }`}
          >
            {handleProfileMainCTA().title}
          </button>
        </div>

        <div className="flex flex-col px-2 mt-16 lg:px-6">
          <p className="text-xl font-bold tracking-tight text-gray-700 uppercase dark:text-gray-50">
            {selectedUser?.firstName} {selectedUser?.lastName}{" "}
          </p>
          <div className="flex justify-between">
            <p className="font-semibold text-gray-500 dark:text-gray-300">
              {selectedUser?.username}
            </p>
            {selectedUser?.link !== "" && (
              <a
                href={selectedUser?.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center font-semibold text-gray-500 dark:text-gray-300 hover:underline"
              >
                <LinkIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />

                <span className="ml-1 capitalize"> My website</span>
              </a>
            )}
          </div>

          <p className="mt-2 mb-4 font-semibold text-gray-500 dark:text-gray-300">
            {selectedUser?.bio}
          </p>
          <Tabs tabTypes={tabTypes} handleTabChange={handleTabChange} />
        </div>
        {/* posts */}
        {currentTab === "posts" && (
          <div>
            <div className="flex flex-col items-center space-y-8">
              {posts &&
                posts.length > 0 &&
                currentUsersPosts.map((post) => (
                  <PostCard post={post} key={post._id} />
                ))}
            </div>

            <div className="flex flex-col items-center space-y-8">
              {currentUsersPosts && currentUsersPosts.length === 0 && (
                <NoDataAvailable
                  message={` Starting with an empty feed? Time to unleash your thoughts and
            let the world know what's on your mind!`}
                />
              )}
            </div>
          </div>
        )}
        {/* Followers */}
        {currentTab === "followers" && (
          <div className="block max-w-lg p-6 m-auto border border-gray-300 rounded-lg shadow-md hover:bg-orange-50 dark:bg-stone-900 ">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-50 ">
              Followers
            </h5>
            {selectedUser?.followers &&
              selectedUser?.followers.length > 0 &&
              selectedUser?.followers.map((follower, index) => (
                <div
                  key={follower._id}
                  className={`flex justify-between py-2 gap-x-2 ${index === selectedUser?.followers.length - 1
                      ? ""
                      : "border-gray-300 border-b"
                    } `}
                >
                  <RecommandedUsers
                    user={follower}
                    clickHandler={
                      followingList.includes(follower?.username)
                        ? unfollowUser
                        : followUser
                    }
                    btnCTA={
                      followingList.includes(follower?.username)
                        ? "Unfollow"
                        : "Follow "
                    }
                  />
                </div>
              ))}
            {selectedUser?.followers && selectedUser?.followers?.length === 0 && (
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-600 dark:text-gray-100 ">
                Nothing to show! 😪
              </h5>
            )}
          </div>
        )}
        {/* following */}
        {currentTab === "following" && (
          <div className="block max-w-lg p-6 m-auto border border-gray-300 rounded-lg shadow-md hover:bg-orange-50 dark:bg-stone-900 ">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-50 ">
              Followings
            </h5>
            {selectedUser?.following &&
              selectedUser?.following.length > 0 &&
              selectedUser?.following.map((followingUser, index) => (
                <div
                  key={followingUser._id}
                  className={`flex justify-between py-2   gap-x-2 ${index === selectedUser?.following.length - 1
                      ? ""
                      : "border-gray-300 border-b"
                    } `}
                >
                  <RecommandedUsers
                    user={followingUser}
                    clickHandler={unfollowUser}
                    btnCTA={
                      followingList.includes(followingUser?.username)
                        ? "Unfollow"
                        : "Follow"
                    }
                  />
                </div>
              ))}
            {selectedUser?.following && selectedUser?.following.length === 0 && (
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-600 dark:text-gray-100 ">
                Nothing to show! 😪
              </h5>
            )}
          </div>
        )}
      </div>
      {/* Creating modal for edit profile */}
      {
        toggleEditProfile && <CustomDialog 
        showModal={toggleEditProfile} 
        setShowModal={setToggleEditProfile} >
          <EditProfileForm setShowModal={setToggleEditProfile} />
        </CustomDialog>
      }
    </>
  );
};

export default Profile;
