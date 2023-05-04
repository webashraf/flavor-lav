import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css"
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/Navbar/NavBar";

const Main = () => {
  return (
    <div className="flex flex-col h-screen justify-between container mx-auto overflow-x-hidden md:overflow-x-visible">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
