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
    <div style={{backgroundImage : `url(${cover_photo})`}} className="chef_banner w-full relative bg-no-repeat bg-cover bg-center h-[90vh] bg-fixed px-16 flex items-center z-10">
      <div className="w-2/3 z-10 text-white chef_bio relative p-10 rounded-lg shadow-2xl">
        <div className="w-52 h-44 rounded-full overflow-hidden mb-3"><img src={picture} alt="" /></div>
        <h1 className="text-2xl uppercase underline mb-3 font-serif">Name: {chef_name}</h1>
        <h2 className="text-5xl font-bold mb-3 font-mono">{years_of_experience} years of experience and <br /> total {number_of_recipes}  recipes. <span className="text-lime-400 text-3xl font-mono">({total_likes}+ likes.)</span></h2>
        <p className="font-serif text-xl">{short_bio}</p>
        <p className="text-lg font-bold">
          
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default ChefBanner;
