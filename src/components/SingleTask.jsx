import React from "react";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";

const SingleTask = ({ task }) => {
  console.log(task);
  const { title, descriptions, image } = task;
  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="bg-green-400/20 py-9 px-4 rounded-lg">
        <div className="flex justify-between">
          <img src={image} className="w-20 h-20 rounded-full" alt="" />
          <div className="ml-4">
            <h2 className="md:text-md font-bold">{title}</h2>
            <p className="text-md">{descriptions}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 ">
          <div className="flex items-center">
            <AiOutlineDelete
              size={25}
              className="mr-2 border rounded-full cursor-pointer hover:bg-black/20 hover:text-red-500"
            />
            <AiFillEdit
              size={25}
              className="mr-2 border rounded-full cursor-pointer hover:bg-black/20 hover:text-red-500"
            />
          </div>
          <div>
            <button className="px-2 py-1 bg-black text-white text-xs rounded-lg">
              Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
