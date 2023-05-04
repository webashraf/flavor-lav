import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import Rating from "react-rating";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const DetailsInfo = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);
  const notify = () => toast("Recipe add to favorite!");
  const handleFavoriteBtn = () => {
    setFavorite(true);
    notify();
  };
  return (
    <div className="">
      <div>
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title text-3xl underline font-mono text-lime-500">
              {recipe.name}
            </h2>
            <p className="font-mono">
              <span className="underline font-serif">Cooking method:</span>{" "}
              {recipe.cooking_method}
            </p>
            <ul>
              <h2 className="uppercase font-bold underline font-serif">
                ingredient
              </h2>

              {recipe.ingredients.map((ingredient, i) => (
                <li key={i} className="list-decimal ml-6 font-mono">
                  {ingredient}
                </li>
              ))}
            </ul>
            <div className="flex gap-6 items-center">
              <div className="flex gap-3 items-center">
                <Rating
                  placeholderRating={recipe.ratings}
                  emptySymbol={
                    <AiOutlineStar className="text-2xl text-yellow-500"></AiOutlineStar>
                  }
                  placeholderSymbol={
                    <AiFillStar className="text-2xl text-yellow-500"></AiFillStar>
                  }
                  readonly
                />
                <span className="text-yellow-500">{recipe.ratings}</span>
              </div>

              <div>
                {favorite ? (
                  <div className="text-4xl text-red-500" onClick={notify}>
                    <MdFavorite></MdFavorite>
                  </div>
                ) : (
                  <div
                    className="text-4xl text-red-500"
                    onClick={handleFavoriteBtn}
                  >
                    <MdFavoriteBorder></MdFavoriteBorder>
                  </div>
                )}
              </div>
            </div>
          </div>
          <figure>
            <LazyLoadComponent
              effect="blur"
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default DetailsInfo;
