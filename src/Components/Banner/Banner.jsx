import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/chefBannerAnimation.json";
import "./Banner.css";
const Banner = () => {
  return (
    <div className=" headerBanner md:h-[95vh] border bg-cover bg-top bg-fixed flex items-center flex-col md:flex-row gap-6 md:justify-between z-0 md:px-12 px-6 py-20">
      <div className=" z-10 uppercase border-b-8 rounded-b-2xl text-white md:w-1/2">
        <h1 className="text-3xl md:text-6xl md:leading-[3.9rem] font-semibold mb-1">
          Delight your{" "}
          <span className="font-bold text-lime-300 underline">taste</span>{" "}
          <br /> <span className="font-bold text-lime-300 underline">buds</span>{" "}
          with our culinary <br /> expertise
        </h1>
        <p>"From Farm to Plate, We Craft Exquisite Flavors for You to Savor"</p>
      </div>
      <div className="z-10">
      <Lottie animationData={animationData} loop={true} />;
      </div>
    </div>
  );
};

export default Banner;
