import React from "react";
import './ChefBanner.css'

const ChefBanner = ({ chef }) => {
  // console.log(chef);
  const {
    id,
    picture,
    cover_photo,
    chef_name,
    years_of_experience,
    number_of_recipes,
    total_likes,
    short_bio,
    ingredients,
    method_of_cooking,
    ratings,
    recipes,
  } = chef;
  return (
    <div style={{backgroundImage : `url(${cover_photo})`}} className="chef_banner w-full relative bg-no-repeat bg-cover bg-center h-screen border border-8 bg-fixed px-16 flex items-center z-10">
      <div className="w-1/2 z-10 text-white chef_bio relative p-10 rounded-lg shadow-2xl">
        <div className="w-52 h-52 rounded-full overflow-hidden mb-3"><img src={picture} alt="" /></div>
        <h1 className="text-2xl uppercase underline mb-3 font-serif">{chef_name}</h1>
        <h2 className="text-7xl font-bold mb-3 font-mono">Total {number_of_recipes} <br /> recipes  and {total_likes}+ <br /> likes. <span className="text-lime-400 text-3xl font-mono">({years_of_experience} years of experience.)</span></h2>
        <p className="font-serif">{short_bio}</p>
        <p className="text-lg font-bold">
          
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default ChefBanner;
