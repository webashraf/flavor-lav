import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailsInfo = ({ chef }) => {
  //   console.log(chef.ingredients);
//   const [favorite, setFavorite] = useState([]);
const notify = () => toast("Wow so easy!");
  return (
    <div className="py-4 my-24">
      <div className="w-1/3 border-b-4 border-lime-400 mx-auto rounded-b-2xl py-5 my-5 ">
        <h1 className="text-5xl text-center uppercase font-bold border border-b-8 border-lime-500 p-5 font-mono">
          Recipes
        </h1>
        <ToastContainer />
      </div>
      <div className="grid grid-cols-3 gap-8 mx-auto p-20 ">
        {chef.recipes.map((recipe, i) => (
          <div key={i} className="card bg-base-100 shadow-2xl">
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
                {chef.ingredients.map((ingredient, i) => (
                  <li key={i} className="list-decimal ml-6 font-mono">{ingredient}</li>
                ))}
              </ul>
              <form>
                <label className="swap swap-flip text-5xl">
                  <input type="checkbox" />
                  <button disabled className="swap-on">
                    <MdFavorite></MdFavorite>
                  </button>
                  <div onClick={notify} className="swap-off">
                    <MdFavoriteBorder></MdFavoriteBorder>
                  </div>
                </label>
              </form>
            </div>
            <figure>
              <img
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Shoes"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsInfo;
