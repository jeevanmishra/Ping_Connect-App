/* eslint-disable jsx-a11y/img-redundant-alt */

import { useState, useEffect } from "react";
import { CameraIcon } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../services/auth-services";
import { toast } from "react-hot-toast";
import { setAuthAndUser } from "../../store/authSlice";
import { errorHandler } from "../../services/common-util";
import { updateUser } from "../../store/usersSlice";

const avatarLinks = [
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_4191e98a-8aee-4200-b956-343faa6bef7c.jpg?updatedAt=1686940611518",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_523f7d9a-cacd-47f9-a49b-b9144254dabc.jpg?updatedAt=1686940611659",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_020d6743-7a2d-4329-8cf2-19e4fd779812.jpg?updatedAt=1686940612243",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_2db6717e-7690-46f0-8889-3a956c4adf0b.jpg?updatedAt=1687637106249",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d34ae410-3dd4-4516-8028-6407b2aa7d67.jpg?updatedAt=1686940614203",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_215c4292-ca7a-4b83-a757-4934f0433789.jpg?updatedAt=1687637106578",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_fee1c365-dd27-42d8-afed-6c67668d1343.jpg?updatedAt=1687637106506",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
];

const EditProfileForm = ({ setShowModal }) => {
  const location = useLocation()
  const {user,token} = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formState, setFormState] = useState(null);

  useEffect(() => {
    setFormState({ ...user, banner: user.banner ?? 'https://source.unsplash.com/random/720x480/?minimalistic' });
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditUser(formState);

    typeof setShowModal === 'function' && setShowModal(false);
  };


  const handleEditUser = async (payload) => {
    try {
      const {
        data: { user },
      } = await editUser({ userData: payload });
      toast.success("Profile Updated");
      dispatch(setAuthAndUser({ token: token, user: user }));
      dispatch(updateUser([user]))
      if (location.pathname === "/user-details") {
        navigate("/home")
      }
    } catch (error) {
      errorHandler(error);
    }
  };

  const changeFileHandler = async (e) => {
    const file = e.target.files[0];
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    let base64File = await toBase64(file);
    setFormState((prevVal) => ({ ...prevVal, [e.target.name]: base64File }));
  };

  const changeHandlerFn = (e) => {
    setFormState((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      className="space-y-4 md:space-y-6"
      onSubmit={handleSubmit}
    >
      {location.pathname !== '/user-details' && <h3 className="text-xl font-bold tracking-tight text-center text-gray-700 dark:text-gray-50">
        Profile Details
      </h3>}
      {location.pathname === '/user-details' && <div className="relative flex justify-center">
        <h3 className="text-xl font-bold tracking-tight text-center text-gray-700 dark:text-gray-50">
          Set Profile Details
        </h3>
        <Link className="absolute right-0 inline-flex items-center justify-center w-24 col-span-2 px-2 py-2 text-sm font-medium text-center text-gray-700 uppercase border border-gray-200 rounded-md shadow dark:border-stone-600 dark:bg-stone-600 dark:hover:bg-stone-700 dark:text-gray-50 hover:bg-orange-400 bg-orange-50 hover:text-gray-100 " to="/home">Skip</Link>
      </div>}
      <div className="relative">
        <img
          className="w-full h-40 max-w-full rounded-md lg:h-60"
          src={formState?.banner}
          alt="image description"
        />
        <label
          htmlFor="dropzone-file-banner"
          className="absolute top-0 flex flex-col items-center justify-center w-full h-40 max-w-full rounded-md cursor-pointer lg:h-60 hover:bg-bray-800 bg-gray-600/40 hover:border-gray-500 hover:bg-gray-700/30"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <CameraIcon className="w-10 h-10 text-gray-600 dark:text-gray-100" />
          </div>
          <input
            onChange={changeFileHandler}
            src={formState?.banner}
            id="dropzone-file-banner"
            accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
            name="banner"
            type="file"
            className="hidden"
          />
        </label>

        <Popover className="relative">
          <Popover.Button className="absolute px-4 py-2 my-4 text-sm font-medium text-center text-gray-100 bg-orange-400 rounded-md shadow right-6 -bottom-8 lg:right-4 dark:bg-stone-700 dark:hover:bg-stone-600 hover:text-gray-100 hover:bg-orange-400/95">
            Choose Avatar
          </Popover.Button>

          <Popover.Panel className="absolute right-0 z-10 p-4 my-2 bg-orange-200 border-2 border-orange-200 rounded-md dark:bg-stone-700 dark:border-stone-500 top-4">
            <div className="grid grid-cols-4 gap-4">
              {avatarLinks.map((avatar, index) => (
                <Popover.Button
                  key={index}
                  onClick={() =>
                    setFormState({
                      ...formState,
                      profilePic: avatar,
                    })
                  }
                >
                  <img
                    className="w-12 h-12 rounded-full lg:w-16 lg:h-16"
                    src={avatar}
                    alt="avatar"
                  />
                </Popover.Button>
              ))}
            </div>
          </Popover.Panel>
        </Popover>
        <div className="absolute p-6 top-36 lg:top-40">
          <img
            className="w-20 h-20 border-4 border-orange-100 rounded-full bg-orange-50 dark:border-stone-800 dark:bg-stone-900 lg:h-28 lg:w-28"
            src={formState?.profilePic}
            alt="avatar"
          />

          <label
            htmlFor="dropzone-file-avatar"
            className="absolute flex flex-col items-center justify-center w-20 h-20 border-4 border-orange-100 rounded-full cursor-pointer dark:border-stone-800 top-6 lg:h-28 lg:w-28 bg-gray-600/40 hover:bg-gray-700/30"
          >
            <div className="relative">
              <CameraIcon className="absolute w-5 h-5 text-gray-600 dark:text-gray-100 lg:w-8 lg:h-8 top-4 left-4" />
            </div>
            <input
              id="dropzone-file-avatar"
              onChange={changeFileHandler}
              src={formState?.profilePic}
              accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
              name="profilePic"
              type="file"
              className="hidden"
            />
          </label>
        </div>
      </div>


      <div>
        <label
          htmlFor="bio"
          className="block mt-12 mb-2 text-sm font-medium text-gray-700 dark:text-gray-50 lg:mt-20"
        >
          Bio
        </label>
        <textarea
          onChange={changeHandlerFn}
          placeholder="Something about yourself."
          value={formState?.bio}
          maxLength={250}
          name="bio"
          id="bio"
          cols="20"
          className="border h-20 lg:h-40 sm:text-sm font-medium rounded-lg block w-full p-2.5 bg-orange-50 dark:bg-stone-900 border-orange-200 placeholder-gray-500 text-gray-700 dark:border-stone-700 dark:text-gray-50 focus:ring-orange-200 focus:border-orange-200 resize-none"
          rows="5"
        ></textarea>
      </div>
      <div className="relative">
        <label
          htmlFor="link"
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50"
        >
          Website
        </label>
        <input
          type="url"
          onChange={changeHandlerFn}
          value={formState?.link}
          name="link"
          id="link"
          placeholder="http://www.example.com"
          className="border sm:text-sm font-medium rounded-lg block w-full p-2.5 bg-orange-50 dark:bg-stone-900 border-orange-200 placeholder-gray-500 text-gray-700 dark:text-gray-50 focus:ring-orange-200 focus:border-orange-200 dark:border-stone-700"
        />
      </div>
      <button
        type="submit"
        className="w-full px-5 py-2.5 text-sm lg:text-base font-medium text-center text-gray-700 dark:text-gray-50 rounded-lg border-1 border-gray-600 bg-orange-300 focus:ring-4  dark:bg-stone-600 dark:hover:bg-stone-700 focus:outline-none hover:text-gray-50 hover:bg-orange-400 focus:ring-orange-200"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditProfileForm;