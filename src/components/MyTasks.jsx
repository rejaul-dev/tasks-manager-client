import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "./Loading";
import SingleTask from "./SingleTask";

const MyTasks = () => {
  // react tanStack query 
  const { data: tasks = [], refetch, isLoading } = useQuery({
    queryKey: ["myTasks"],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/myTasks');
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className=" max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ">
      {tasks?.map((task, index) => (
        <SingleTask key={index} task={task}></SingleTask>
      ))}
    </div>
  );
};

export default MyTasks;
