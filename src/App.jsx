import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Recipe from './components/Recipe/Recipe'
import Recipes from './components/Recipes/Recipes'
import { data } from 'autoprefixer'

function App() {

    const [recipes, setRecipes] = useState([]);
    const [cart, setCart] = useState ([]);

  useEffect(() => {
    fetch ('./recipes.json')
    .then ( res => res.json())
    .then ( data => {
      setRecipes(data);
    });
  }, []);
  
  const handleCart = (menu) => {
    const isExist = cart.find((item) => item.recipe_id == menu.recipe_id);
    if(!isExist){
      setCart([...cart, menu])
    }else(
      alert('alert')
    )
    // setCart([menu]);
  };

    const handlePreparing = (id) => {
      // console.log(id);
      const newCart = cart.filter(item => item.id != item.id);
      setCart(newCart);

    }




  
  // console.log(cart);
  return (
    <>
      <Header></Header>
      <Recipes></Recipes>
      {/* <Recipe></Recipe> */}

      <div className='recipe-container w-11/12 mx-auto'>
          <h1 className='text-3xl font-bold text-center mb-3'>Our Recipes</h1>
          <p className='text-center mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam minima molestiae aliquid?</p>
          <div className='flex'>

             <div className='md:grid grid-cols-2 w-2/3'>
             {
                recipes.map( recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handleCart = {handleCart}></Recipe>)
              }

            
             </div>
            <div className='recipe-count-container w-1/3'>
              <h2 className="text-xl text-center font-bold mb-3">Want to Cook: <span> 0 </span></h2>
              <div className="recipe-count flex justify-between items-center">
                <h5>Name</h5>
                <h5>Time</h5>
                <h5>Calories</h5>
              </div>
              <hr />

                

              <div className="recipe-info">
                {
                 cart.map((item, index)=>(
                  <div key={item} className='flex justify-between items-center'>
                    <p>{index + 1}</p>
                    <h5>{item.recipe_name}</h5>
                <h5>{item.preparing_time}</h5>
                <h5>{item.calories}</h5>
                <button onClick={() => handlePreparing(item.id)} className='add-btn bg-green-500 p-2 rounded text-white'>Preparing</button>
                  </div>
                 ))
                }
              </div>

              <div>
                <h2 className="text-xl text-center font-bold mb-3">Currently Cooking: <span> 0 </span></h2>
              <div className="recipe-count flex justify-between items-center">
                <h5>Name</h5>
                <h5>Time</h5>
                <h5>Calories</h5>
              </div>
              <hr />
                </div>

            </div>
          </div>
      </div>
    </>
  )
}

export default App
