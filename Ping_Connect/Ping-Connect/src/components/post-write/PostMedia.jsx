import { XCircleIcon } from "@heroicons/react/24/solid";

const PostMedia = ({
  mediaFile,
  mediaType,
  handleRemoveFile,
  height,
  width,
  disableButton,
}) => {
  if (mediaFile === null) return;
  if (mediaType.includes("video")) {
    return (
      <div className={`relative ${height} ${width}`}>
        <video className={`${height} ${width}`} controls>
          <source src={mediaFile} type={"video/mp4"} />
        </video>

        {handleRemoveFile && (
          <button
            disabled={disableButton}
            onClick={handleRemoveFile}
            className={`absolute -right-2 top-0 ${
              disableButton ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <XCircleIcon className="w-6 h-6 bg-orange-50 dark:bg-stone-900 rounded-full text-red-400 hover:text-red-500 " />
          </button>
        )}
      </div>
    );
  } else if (mediaType.includes("image")) {
    return (
      <div className={`relative  ${height} ${width}`}>
        <img
          className={`object-cover rounded-sm ${height} ${width}`}
          src={mediaFile}
          alt={"image_preview"}
        />

        {handleRemoveFile && (
          <button
            disabled={disableButton}
            onClick={handleRemoveFile}
            className={`absolute -right-2 top-0 ${
              disableButton ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <XCircleIcon
             
              className="w-6 absolute -right-2 -top-2 h-6 bg-orange-50 dark:bg-stone-900 rounded-full text-red-400 hover:text-red-500  "
            />
          </button>
        )}
      </div>
    );
  }
  return <p className="text-gray-600 dark:text-gray-100"> File type not supported.</p>;
};

export default PostMedia;
