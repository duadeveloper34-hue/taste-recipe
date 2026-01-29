'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import Link from 'next/link'

const RecipeCard = ({ recipe }) => {

  const [favourite, setFavourite] = useState(false);

  const toggleFavourite = () => {
    setFavourite(!favourite);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative overflow-hidden h-48">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 text-dark dark:text-white line-clamp-1">{recipe.strMeal}</h3>
        <div className="flex justify-between items-center mt-4">
          <Link
            href={`/recipe/${recipe.idMeal}`}
            className="bg-bg-primary text-text-primary  dark:text-leaf-green-light font-medium px-2 py-1 rounded-md text-sm"
          >
            View Recipe
          </Link>
          <button onClick={() => setFavourite(!favourite)} className="text-gray-500  cursor-pointer hover:text-leaf-green dark:hover:text-leaf-green-light transition-colors hover: scale-120">

            <Heart className={`size-5 ${favourite ? 'fill-red-600 stroke-red-600 ' : 'fill-transparent stroke-gray-500'}`} />

            {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg> */}
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard