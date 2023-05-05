import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';


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
  } = chefs;
  return (
    <>
      <div className="card md:card-side bg-base-100 md:flex-row-reverse rounded-l-none rounded-r-2xl overflow-hidden flex-col shadow-2xl w-[90%] mx-auto">
        <figure className="w-[120px] h-[120px] ml-6 md:ml-0 mt-6 md:mt-0 lg:w-auto lg:h-auto rounded-full overflow-hidden">
          <LazyLoadImage effect="blur" className="w-52" src={picture} alt="chef_img" />
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
