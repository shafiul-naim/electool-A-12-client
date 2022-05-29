import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItem = (
    <>
      
      <li className="text-primary text-2xl">
        <Link to="/tools">All Tools</Link>
      </li>
      
      <li className="text-primary text-2xl">
        <Link to="/blogs">Blogs</Link>
      </li>
      <li className="text-primary text-2xl">
        <Link to="/myportfolio">My Portfolio</Link>
      </li>
      {user && (
        <li className="text-primary text-2xl">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li className="text-neutral text-2xl">
        {user ? (
          <div >
            <p className=" text-xl text-stone-500">{user.displayName}</p>
            <button onClick={logout} className="btn btn-outline  btn-ghost text-red-500">
              sign out
            </button>
          </div>
        ) : (
          <Link className=" text-xl text-stone-500" to="/login">login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 px-12 mx-auto bg-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content text-2xl mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-4xl font-bold text-secondary">
          Electool
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        <label
          htmlFor="dashboard-sidebar"
          tabIndex="1"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
