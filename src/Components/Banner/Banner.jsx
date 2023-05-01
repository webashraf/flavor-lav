import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className=" headerBanner  border bg-cover bg-top bg-fixed -mt-32 flex items-center justify-start z-0 px-12">
      <div className=" z-10 uppercase border-b-8 rounded-b-2xl text-white w-1/2">
        <h1 className="text-6xl leading-[3.9rem] font-semibold mb-1">
          Delight your{" "}
          <span className="font-bold text-lime-300 underline">taste</span>{" "}
          <br /> <span className="font-bold text-lime-300 underline">buds</span>{" "}
          with our culinary <br /> expertise
        </h1>
        <p>"From Farm to Plate, We Craft Exquisite Flavors for You to Savor"</p>
      </div>
    </div>
  );
};

export default Banner;
