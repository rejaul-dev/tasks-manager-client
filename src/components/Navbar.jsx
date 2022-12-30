import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="max-w-[1240px] mx-auto flex justify-between items-center py-6">
      <Link to="/" className="md:text-2xl">
        Tasks <span className="font-bold">Manager</span>
      </Link>
      <ul className="flex justify-between items-center gap-4 ">
        <li className="">
          <Link to="/addTasks">Add Tasks</Link>
        </li>
        <li>
          <Link to="/myTasks">My Tasks</Link>
        </li>
        <li>
          <Link to="/completedTasks">Completed Tasks</Link>
        </li>
        {user?.uid ? (
          <li>
            <button
              onClick={handleLogout}
              className="bg-green-400 py-2 px-4 text-white rounded-full text-xs font-bold cursor-pointer"
            >
              Sign Out
            </button>
          </li>
        ) : (
          <li>
            <Link
              to="/login"
              className="bg-green-400 py-2 px-4 text-white rounded-full text-xs font-bold cursor-pointer"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
