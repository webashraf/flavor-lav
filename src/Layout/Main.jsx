import React from "react";
import NavBar from "../shared/NavBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
