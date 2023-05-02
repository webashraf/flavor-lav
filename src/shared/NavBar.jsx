import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ContextProvider } from "../contextProvider/AuthProvider";

const NavBar = () => {
  const {user} = useContext(ContextProvider);
  console.log(user.photoURL);
  return (
    <>
      <div className="navbar bg-base-100 justify-between px-10 shadow-2xl z-10 py-4 border-b-4 border-lime-600 rounded-b-2xl">
        <div className="navbar-start justify-between lg:justify-normal w-full lg:w-auto">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-auto"
            >
            <NavLink
              to={"/"}
              className={ ({ isActive }) =>
                isActive ? "border-b-2 border-lime-500 rounded-b-lg py-1 px-4" : "px-4"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/blog"}
              className={ ({ isActive }) =>
                isActive ? "border-b-2 border-lime-500 rounded-b-lg py-1 px-4" : "px-4"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to={"/about"}
              className={ ({ isActive }) =>
                isActive ? "border-b-2 border-lime-500 rounded-b-lg py-1 px-4" : "px-4"
              }
            >
              About
            </NavLink>
              <li className="btn bg-lime-600">Login</li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost normal-case text-xl  text-4xl"
          >
            Flavor Lab
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-9 ">
            <NavLink
              to={"/"}
              className={ ({ isActive }) =>
                isActive ? "border-b-2 border-lime-500 rounded-b-lg py-1 px-4" : "px-4"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/blog"}
              className={ ({ isActive }) =>
                isActive ? "border-b-2 border-lime-500 rounded-b-lg py-1 px-4" : "px-4"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to={"/about"}
              className={ ({ isActive }) =>
                isActive ? "border-b-2 border-lime-500 rounded-b-lg py-1 px-4" : "px-4"
              }
            >
              About
            </NavLink>
            {
              user ?           <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user && user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div> : <Link to={"/signin"} className="btn bg-lime-600 border-lime-600 px-8 rounded-sm">Login</Link>
            }
            
          </ul>

        </div>
      </div>
    </>
  );
};

export default NavBar;
