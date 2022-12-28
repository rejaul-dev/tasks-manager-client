import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[1240px] mx-auto flex justify-between items-center text-white py-6">
      <Link to='/'>Tasks Manager</Link>
      <ul className="flex justify-between items-center gap-4 ">
        <li>
          <Link to="/addTasks">Add Tasks</Link>
        </li>
        <li>
          <Link to="/myTasks">My Tasks</Link>
        </li>
        <li>
          <Link to="/completedTasks">Completed Tasks</Link>
        </li>
        <li>
          <Link to="/addTasks"></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
