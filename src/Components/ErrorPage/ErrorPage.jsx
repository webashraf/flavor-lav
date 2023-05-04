import React from "react";
import Lottie, { useLottie } from "lottie-react";
import animationData from "../../../public/errorAnimation.json";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const ErrorPage = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
            backgroundImage: `url("https://i.ibb.co/3kNJHbv/pexels-photo-12232803.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">

        <Lottie animationData={animationData} loop={true} />;
        <h1 className="mb-5 text-7xl font-bold text-lime-500">404 Erorr!!!</h1>
      <p className="mb-5">Page not found.</p>
      <Link to={"/"} className="btn glass"><BsArrowLeft></BsArrowLeft> &nbsp;  Go To Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
