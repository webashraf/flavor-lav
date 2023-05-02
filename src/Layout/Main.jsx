import React from "react";
import NavBar from "../shared/NavBar";
import { Outlet } from "react-router-dom";
import "../App.css"

const Main = () => {
  return (
    <div style={{width: "100%"}}>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
