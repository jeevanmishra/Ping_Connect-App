import { HeartIcon,BookmarkIcon } from "@heroicons/react/24/outline";
import { getUserFromLocalStorage } from "../../services/localstorage-service";
import PostCardMenu from "../post-card-menu/PostCardMenu";
import { Link } from "react-router-dom";
import PostMedia from "../post-write/PostMedia";
import useUsersUtility from "../../hooks/useUsersUtility";
import usePostsOperations from './../../hooks/usePostsOperations';
import { useSelector } from "react-redux";
import { checkMediaType } from "../../services/post-service";

const PostCard = ({ post }) => {
  const {
    username,
    content,
    likes: { likeCount, likedBy },
    _id,
    media,
  } = post;
  const { getUserByUsername } = useUsersUtility();

  const bookmarks=useSelector(store=>store.post.bookmarks)
  const { handlePostDislike, handlePostLike, disableCurrentButton, handleAddToBookmark,
    handleRemoveFromBookmark, } = usePostsOperations()

  const currentUser = getUserFromLocalStorage().username;
  const likedByCurrentUser = likedBy
    .map((ele) => ele.username)
    .includes(currentUser);
  const { firstName, lastName, profilePic } = getUserByUsername(username);
  const isBookmarked = bookmarks.includes(_id);
  return (
    <div className="block w-full max-w-lg px-6 pt-6 pb-4 border border-gray-300 rounded-lg shadow bg-gradient-to-br bg-orange-100/20 bg-blend-darken dark:border-stone-700 dark:bg-stone-800/40">
      <div className="flex justify-between mb-4">
        <div className="flex flex-row">
          <Link to="/profile" state={post}>
            <img
              className="w-12 h-12 rounded-full"
              src={profilePic}
              alt="avatar"
            />
          </Link>
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-gray-700 dark:text-gray-50">{`${firstName} ${lastName}`}</p>
            <small className="text-xs font-semibold text-gray-500 dark:text-gray-300">
              {username}
            </small>
          </div>
        </div>
        <PostCardMenu post={post} />
      </div>
      <p className="pb-2 font-semibold text-gray-600 dark:text-gray-100 ">
        {content}
      </p>
      {media !== "" && (
        <PostMedia
          mediaFile={media}
          mediaType={checkMediaType(media).type}
          height={"h-full"}
          width={"w-full"}
        />
      )}
      <div className="flex mt-2">
        <div className="flex items-center group">
          <button
            disabled={disableCurrentButton === _id}
            title={likedByCurrentUser ? "Dislike" : "Like"}
            className={
              disableCurrentButton === _id ? " cursor-not-allowed" : ""
            }
            onClick={
              likedByCurrentUser
                ? () => handlePostDislike(_id)
                : () => handlePostLike(_id)
            }
            type="button"
          >
            <HeartIcon
              className={`p-2 text-gray-600 dark:text-gray-100 rounded-full  w-9 h-9  hover:bg-red-300/60 hover:fill-red-500 group-hover:text-red-600  
              
              dark:hover:bg-red-300/60 dark:hover:fill-red-500 dark:group-hover:text-red-600
              ${likedByCurrentUser
                  ? "fill-red-500 text-red-600  dark:text-red-500 dark:fill-red-500"
                  : ""
                }  ${disableCurrentButton === _id
                  ? " cursor-not-allowed"
                  : "cursor-pointer"
                } `}
            />
          </button>
          <p
            className={`ml-1 text-gray-600 dark:text-red-100 dark:group-hover:text-red-500  group-hover:text-red-600 text-normal ${likedByCurrentUser ? "text-red-600 dark:text-red-500" : ""
              }`}
          >
            {likeCount}
          </p>
        </div>
        {/* <div className="flex items-center group">
          <ChatBubbleBottomCenterIcon className="p-2 ml-8 text-gray-600 rounded-full cursor-pointer dark:text-gray-100 w-9 h-9 hover:bg-orange-300/60 hover:fill-orange-500 hover:text-orange-600 " />
          <p className="ml-1 text-gray-600 dark:text-gray-100 group-hover:text-orange-600 text-normal">
            {comments.length}
          </p>
        </div> */}

        <button
          onClick={
            isBookmarked
              ? () => handleRemoveFromBookmark(_id)
              : () => handleAddToBookmark(_id)
          }
          disabled={disableCurrentButton === _id}
          className={disableCurrentButton === _id ? " cursor-not-allowed" : ""}
          title={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
          type="button"
        >
          <BookmarkIcon
            className={`p-2 ml-8 text-gray-600 dark:text-gray-100 rounded-full w-9 h-9 dark:hover:bg-stone-500/60 hover:bg-orange-300/60 hover:fill-orange-500 hover:text-orange-600 dark:hover:fill-orange-700 dark:hover:text-orange-800  ${isBookmarked
                ? "fill-orange-500 text-orange-600 dark:fill-orange-700 dark:text-orange-800"
                : ""
              }  
            ${disableCurrentButton === _id
                ? " cursor-not-allowed"
                : "cursor-pointer"
              }
            `}
          />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
