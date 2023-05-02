import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ chefs }) => {
  // console.log(chefs);
  // const {chef_name} = chefs;

  const {
    id,
    picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
    total_likes,
    short_bio,
    ingredients,
    method_of_cooking,
    ratings,
    recipes,
  } = chefs;
  return (
    <>
      <div className="card card-side bg-base-100 shadow-2xl">
        <figure>
          <img className="w-52" src={picture} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{chef_name}</h2>
          <p className="font-semibold grow-0">
            Experience: {years_of_experience} years of expertise.
          </p>
          <p className="font-semibold grow-0">
            Total Recipes: {number_of_recipes} Recipes.
          </p>
          <p className="font-semibold grow-0">
            Total Likes: {total_likes} likes.
          </p>
          <div className="card-actions justify-start mt-auto">
            <Link
              to={`/details/${id}`}
              className="btn bg-lime-600 rounded-sm border-lime-600"
            >
              View Racipes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chef;
