import React, { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <h2 className="card-title text-3xl underline font-mono">
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
            <div>
              {favorite ? (
                <div className="text-4xl text-lime-500" onClick={notify}>
                  <MdFavorite></MdFavorite>
                </div>
              ) : (
                <div className="text-4xl text-lime-500" onClick={handleFavoriteBtn}>
                  <MdFavoriteBorder></MdFavoriteBorder>
                </div>
              )}
            </div>
          </div>
          <figure>
            <img
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
