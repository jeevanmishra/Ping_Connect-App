import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CustomDialog from './../dialog/CustomDialog';
import PostWrite from './../post-write/PostWrite';

const FloatingActionButton = () => {
  const [toggleDialog,setToggleDialog]=useState(false)

  return (
    <div className="fixed right-4 bottom-20 group">
      <button
        onClick={()=>setToggleDialog(true)}
        type="button"
        className="flex items-center justify-center text-white bg-orange-400 rounded-full dark:bg-stone-700 dark:hover:bg-stone-600 w-14 h-14 hover:bg-orange-700 focus:ring-4 dark:focus:ring-stone-500 focus:ring-orange-300 focus:outline-none "
      >
        <PlusIcon className="w-6 h-6 transition-transform group-hover:rotate-45" />

        <span className="sr-only">Open actions menu</span>
      </button>
      {/* Creating portal for postwrite */}
      {
        toggleDialog && <CustomDialog showModal={toggleDialog} setShowModal={setToggleDialog}>
          <PostWrite closeModal={setToggleDialog} post={{}}/>
        </CustomDialog>
      }
    </div>
  );
};

export default FloatingActionButton;
