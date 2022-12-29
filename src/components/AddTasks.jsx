import React from "react";

const AddTasks = () => {
  return (
    <div className="max-w-[1240px] mx-auto h-[600px]  text-green-400">
      <div className="md:w-1/3 mx-auto  bg-green-400/20 py-16 px-10 rounded-lg">
        <h1 className="md:text-xl font-bold">Add Your Daily Tasks</h1>
        <input
          className="py-2 px-4 w-full text-black mt-2 rounded-lg"
          type="text"
          name="text"
          id=""
          placeholder="Tasks Title"
        />
        <textarea
          name=""
          id=""
          cols=""
          rows="4"
          placeholder="Tasks Descriptions"
          className="w-full mt-2 py-2 px-4 text-black rounded-lg"
        ></textarea>
        <input type="file" src="" alt="" />
        
        <button
          type="submit"
          className="bg-black w-full py-3 px-8 rounded-lg cursor-pointer mt-2"
        >
          Add Tasks
        </button>
      </div>
    </div>
  );
};

export default AddTasks;
