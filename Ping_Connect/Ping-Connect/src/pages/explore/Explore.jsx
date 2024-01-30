import { useRef, useState } from "react";
import PostCard from "../../components/post-card/PostCard";
import { useEffect } from "react";
import { delayResult } from "../../services/common-util";
import PostCardSkeleton from "../../components/post-card-skeleton/PostCardSkeleton";
import NoDataAvailable from "../../components/no-data-available/NoDataAvailable";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/usersSlice";

const Explore = () => {

  const [showLoader, setShowLoader] = useState(false)
  const observerTarget = useRef(null);
  const [allPosts, setAllPosts] = useState([]);
  const dispatch = useDispatch()
  const posts = useSelector(store => store.post.posts)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowLoader(true);
          delayResult(() => {
            setShowLoader(false);
            setAllPosts((prevState) => [...prevState, ...posts]);
          }, 2000);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(observerTarget.current);
      }
    };
  }, [posts, setShowLoader]);
  useEffect(() => {
    document.title = "EXPLORE | PING CONNECT";
    dispatch(setCurrentPage("explore"));
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center mt-2 space-y-4">
      {allPosts &&
        allPosts.length > 0 &&
        allPosts.map((post, index) => (
          <PostCard post={post} key={post._id + index} />
        ))}
      <div ref={observerTarget}></div>
      {showLoader && [1,2,3].map((ele,index)=><PostCardSkeleton key={index} />)}
      {!showLoader && posts && posts.length === 0 && (
        <NoDataAvailable
          message={`Remember, a simple follow or a post can lead to remarkable
          connections and delightful experiences. So, go ahead and make that
          move right now.`}
        />
      )}
    </div>
  );
};

export default Explore;
