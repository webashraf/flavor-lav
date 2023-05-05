import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "../CheifBanner/ChefBanner";
import DetailsInfo from "../DetailsInfo/DetailsInfo";
import { ToastContainer } from "react-toastify";

const Details = () => {
  const chef = useLoaderData();
  // console.log("Chef is" ,chef);
  return (
    <div style={{ zIndex: "-100" }} className="w-full">
      {/* <h1 className='text-7xl text-black'>Chef Details</h1> */}
      <ChefBanner chef={chef}></ChefBanner>

      <div className="py-20 mb-20">
        <div className="w-1/3 border-b-4 border-lime-400 mx-auto rounded-b-2xl py-5 my-5 py-4 mb-28 ">
          <h1 className="text-5xl text-center uppercase font-bold border border-b-8 border-lime-500 p-5 font-mono">
            Recipes
          </h1>
          <ToastContainer />
        </div>
        {chef ? (
          <div className="grid grid-cols-3 gap-6 ">
            {chef.recipes.map((recipe) => (
              <DetailsInfo key={recipe.id} recipe={recipe}></DetailsInfo>
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
    </div>
  );
};

export default Details;
