import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css"
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/Navbar/NavBar";

const Main = () => {
  return (
    <div style={{width: "100%"}} className="flex flex-col h-screen justify-between">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
