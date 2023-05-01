import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>

      <div className="navbar bg-base-100 justify-between px-10 sticky top-0 z-10 py-8 bg-transparent">
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
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li className="btn btn-danger">Login</li>
              <li></li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl text-white text-4xl">
            CHEIF BARI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-9 text-white">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li className="btn btn-danger">Login</li>
          </ul>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
              </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
