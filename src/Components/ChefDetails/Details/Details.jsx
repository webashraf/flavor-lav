import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "../CheifBanner/ChefBanner";
import DetailsInfo from "../DetailsInfo/DetailsInfo";
import { ToastContainer } from "react-toastify";

const Details = () => {
  const chef = useLoaderData();
  // console.log("Chef is" ,chef);
  return (
    <div className="w-full">
      {/* <h1 className='text-7xl text-black'>Chef Details</h1> */}
      <ChefBanner chef={chef}></ChefBanner>

      <div className="w-1/3 border-b-4 border-lime-400 mx-auto rounded-b-2xl py-5 my-5 py-4 my-24 ">
        <h1 className="text-5xl text-center uppercase font-bold border border-b-8 border-lime-500 p-5 font-mono">
          Recipes
        </h1>
        <ToastContainer />
      </div>
      <div className="grid grid-cols-3 gap-6">
        {chef.recipes.map((recipe, i) => (
          <DetailsInfo key={i} recipe={recipe}></DetailsInfo>
        ))}
      </div>
    </div>
  );
};

export default Details;