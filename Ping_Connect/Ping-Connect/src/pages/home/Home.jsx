import { useEffect } from "react";
import PostCard from "../../components/post-card/PostCard";
import Tabs from "./../../components/tabs/Tabs";
import PostWrite from "../../components/post-write/PostWrite";
import NoDataAvailable from "../../components/no-data-available/NoDataAvailable";
import { delayResult } from "../../services/common-util";
import PostCardSkeleton from "../../components/post-card-skeleton/PostCardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/usersSlice";
import { setSorts } from "../../store/postSlice";
import { useState } from "react";


const Home = () => {
  const [showLoader, setShowLoader] = useState(false)
  const dispatch = useDispatch()
  const { currentUserFeed, current_sortby } = useSelector(store => store.post)

  const sortFeed = () => {
    let sortedFeed = [];
    if (currentUserFeed.length === 0) return;
    switch (current_sortby) {
      case "trending":
        sortedFeed = currentUserFeed.slice().sort(
          (a, b) => b.likes.likeCount - a.likes.likeCount
        );
        break;
      case "latest":
        sortedFeed = currentUserFeed.slice().sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      default:
        sortedFeed = currentUserFeed;
        break;
    }
    return sortedFeed
  };

  const handleTabChange = (e) => {
    e === 0
      ? dispatch(setSorts("latest"))
      : dispatch(setSorts("trending"));
  };
  const tabTypes = ["Latest", "Trending"];
  useEffect(() => {
    setShowLoader(true);
    delayResult(() => {
      setShowLoader(false);
    }, 2000);
    document.title = "HOME | PING CONNECT";
    dispatch(setCurrentPage("home"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative">
      <div className="sticky z-10 bg-orange-50 dark:bg-stone-900 top-16 md:top-20 lg:top-20">
        <div className="hidden p-4 mb-4 border-2 border-orange-200 lg:flex dark:border-gray-100 rounded-xl">
          <PostWrite post={{}} closeModal={undefined} />
        </div>
        <Tabs handleTabChange={handleTabChange} tabTypes={tabTypes} />
      </div>
      <div className="flex flex-col items-center mt-2 space-y-4">
        {!showLoader &&
          currentUserFeed &&
          currentUserFeed.length > 0 &&
          sortFeed().map((post) => <PostCard post={post} key={post._id} />)}
        {showLoader && [1, 2, 3].map((ele) => <PostCardSkeleton key={ele} />)}
      </div>

      <div className="flex flex-col items-center mt-2 space-y-4">
        {!showLoader && currentUserFeed && currentUserFeed.length === 0 && (
          <NoDataAvailable
            message={`Starting with an empty
                feed? Time to unleash your thoughts and let the world
                know what's on your mind!`}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
