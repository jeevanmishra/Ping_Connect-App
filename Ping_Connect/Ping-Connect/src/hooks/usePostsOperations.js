import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addBookmark,
  deletePost,
  dislikePost,
  likePost,
  removeBookmark,
} from "../services/post-service";
import { toast } from "react-hot-toast";
import { errorHandler } from "../services/common-util";
import { setBookmarks, setPosts } from "../store/postSlice";

const usePostsOperations = () => {
  const [disableCurrentButton, setDisableCurrentButton] = useState("");
  const dispatch = useDispatch();

  const handlePostLike = async (postId) => {
    setDisableCurrentButton(postId);
    try {
      const {
        data: { posts },
      } = await likePost(postId);
      dispatch(setPosts(posts));
      toast.success("Post Liked");
    } catch (error) {
      errorHandler(error);
    }
    setDisableCurrentButton("");
  };

  const handlePostDislike = async (postId) => {
    setDisableCurrentButton(postId);
    try {
      const {
        data: { posts },
      } = await dislikePost(postId);
      toast.success("Post Disliked");
      dispatch(setPosts(posts));
    } catch (error) {
      errorHandler(error);
    }
    setDisableCurrentButton("");
  };

  const handleAddToBookmark = async (postId) => {
    setDisableCurrentButton(postId);

    try {
      const {
        data: { bookmarks },
      } = await addBookmark(postId);
      toast.success("Post Bookmarked");
      dispatch(setBookmarks(bookmarks));
    } catch (error) {
      errorHandler(error);
    }
    setDisableCurrentButton("");
  };

  const handleRemoveFromBookmark = async (postId) => {
    setDisableCurrentButton(postId);
    try {
      const {
        data: { bookmarks },
      } = await removeBookmark(postId);
      toast.success("Removed Bookmark");
      dispatch(setBookmarks(bookmarks));
    } catch (error) {
      errorHandler(error);
    }
    setDisableCurrentButton("");
  };

  const handleDeletePost = async (postId) => {
    try {
      const {
        data: { posts },
      } = await deletePost(postId);
      toast.success("Post Deleted");
      dispatch(setPosts(posts));
    } catch (error) {
      errorHandler(error);
    }
  };

  return {
    handlePostLike,
    handlePostDislike,
    handleAddToBookmark,
    handleRemoveFromBookmark,
    handleDeletePost,
    disableCurrentButton,
  };
};

export default usePostsOperations;
