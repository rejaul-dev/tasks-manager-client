import React, { useEffect, useState } from "react";
import SingleTask from "./SingleTask";

const MyTasks = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  console.log(tasks);

  return (
    <div className=" max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ">
     
      {tasks?.map((task, index) => (
        <SingleTask key={index} task={task}></SingleTask>
      ))}
    </div>
  );
};

export default MyTasks;
