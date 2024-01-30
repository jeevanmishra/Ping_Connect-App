import { useEffect } from "react";
import PostCard from "../../components/post-card/PostCard";
import NoDataAvailable from "../../components/no-data-available/NoDataAvailable";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/usersSlice";

const Bookmark = () => {
  const {bookmarks,posts}=useSelector(store=>store.post)
  const dispatch=useDispatch()
  const bookmarkedPosts = posts.filter(({ _id }) => bookmarks.includes(_id));
  useEffect(() => {
    document.title = "BOOKMARKS | PING CONNECT";
    dispatch(setCurrentPage("bookmark" ));
  }, [dispatch]);

  if (bookmarks && bookmarks.length === 0) {
    return (
      <NoDataAvailable
        message={`Save Posts for later, bookmark to see them again here. `}
      />
    );
  }

  return (
    <div className="flex flex-col items-center mt-2 space-y-8">
      {bookmarkedPosts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Bookmark;
