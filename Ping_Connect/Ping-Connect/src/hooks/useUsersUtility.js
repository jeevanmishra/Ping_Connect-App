import { useSelector } from "react-redux";

const useUsersUtility = () => {
  const users = useSelector((store) => store.users.users);

  const getUserByUsername = (userName) =>
    users.find(({ username }) => username === userName);

  const getUsersFollowersList = (user) =>
    user?.followers?.map(({ username }) => username) ?? [];

  const getUsersFollowingList = (user) =>
    user?.following?.map(({ username }) => username) ?? [];

  const getUserAndFollowingsUsername = (user) =>
    user?.following?.reduce(
      (acc, ele) => [...acc, ele.username],
      [user.username]
    ) ?? [];

  const getUsersNotOnFollowingList = (user) =>
    users.filter(
      ({ username }) => !getUserAndFollowingsUsername(user).includes(username)
    );

  return {
    getUserByUsername,
    getUsersFollowersList,
    getUsersFollowingList,
    getUserAndFollowingsUsername,
    getUsersNotOnFollowingList,
  };
};

export default useUsersUtility;
