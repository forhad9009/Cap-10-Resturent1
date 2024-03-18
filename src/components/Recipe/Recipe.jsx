import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { GiMedicinePills } from "react-icons/gi";

const Recipe = ({ recipe, handleCart }) => {
    console.log(handleCart);
    // const {calories} = recipe;
    return (
        <div className=''>
            {/* <h2>{calories}</h2> */}
            <div className='recipe-item-container w-2/3 space-y-3 p-2 md:p-6 shadow-2xl border-2 rounded'>
              <img className='' src={recipe.recipe_image} alt="" />
              <h2 className="text-2xl">{recipe.recipe_name}</h2>
              <p>{recipe.short_description}</p>
              <hr />
              <div>
              <h2 className="text-xl">ingredients</h2>
              <li>{recipe.ingredients}</li>


              {/* <li>1 lb ground beef</li>
              <li>1 packet taco seasoning</li>
              <li>Sour cream and salsa for topping</li> */}
              </div>
              <hr />
              <div className='flex justify-between items-center'>
                <h2><IoMdTime></IoMdTime></h2>
              <h2>{recipe.preparing_time}</h2>
              <p><GiMedicinePills></GiMedicinePills></p>
              <h2>{recipe.calories}</h2>
              </div>
              <button onClick={(e) => handleCart(recipe)} className='add-btn p-2 bg-green-500 rounded font-bold'>Want to Cook</button>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default Recipe;