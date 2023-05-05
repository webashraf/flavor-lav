import React from "react";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import OurStory from "../OurStory/OurStory";
import { useLoaderData } from "react-router-dom";
import Booking from "../Booking/Booking";

const Home = () => {
  const chefData = useLoaderData();
  // console.log(chefData);

  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <div className="md:my-36 px-8">
        <div className="md:w-[350px] border-b-4 border-lime-400 mx-auto rounded-b-2xl py-4 my-28">
          <h1 className="text-5xl text-center uppercase font-bold border border-b-8 border-lime-500 p-5">
            Our Chef
          </h1>
        </div>
        {chefData ? (
          <div className="grid md:grid-cols-3 gap-8">
            {chefData.map((chef) => (
              <Chef key={chef.id} chefs={chef}></Chef>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen flex-col-reverse gap-10">
            <progress className="progress w-56 text-center"></progress>
            <div
              className="radial-progress"
              style={{
                "--value": "70",
                "--size": "12rem",
                "--thickness": "2rem",
              }}
            >
              70%
            </div>
          </div>
        )}
      </div>

      <div className=" md:my-36">
        <OurStory></OurStory>
      </div>
      <div className=" md:my-36">
        <Booking></Booking>
      </div>
    </div>
  );
};

export default Home;
