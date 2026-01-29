'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import RecipeCard from './components/RecipeCard'
import CategoryCard from './components/CategoryCard'

export default function Home() {
  const [featuredRecipe, setFeaturedRecipe] = useState(null)
  const [categories, setCategories] = useState([])
  const [seafoodRecipes, setSeafoodRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)

      // Fetch featured recipe (using the provided API endpoint)
      const featuredResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
      if (featuredResponse.data.meals && featuredResponse.data.meals.length > 0) {
        setFeaturedRecipe(featuredResponse.data.meals[0])
      }

      // Fetch categories
      const categoriesResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      if (categoriesResponse.data.categories) {
        setCategories(categoriesResponse.data.categories.slice(0, 6))
      }

      // Fetch seafood recipes
      const seafoodResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      if (seafoodResponse.data.meals) {
        setSeafoodRecipes(seafoodResponse.data.meals.slice(0, 4))
      }

    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-leaf-green"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Loading delicious recipes...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-bg-primary rounded-2xl p-8 md:p-12 text-black shadow-xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl text-text-primary md:text-5xl font-bold mb-4">Discover Delicious Recipes</h1>
            <p className="text-xl mb-6 opacity-90">Explore thousands of recipes from around the world, carefully curated for your cooking adventures.</p>
            <button className="bg-green-400 hover:bg-bg-primary-dark cursor-pointer  text-black font-semibold py-3 px-6 rounded-lg hover:bg-off-white transition-colors shadow-lg">
              Start Exploring
            </button>
          </div>
        </div>
      </section>

      {/* Featured Recipe */}
      {featuredRecipe && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-dark dark:text-white border-b pb-2 border-leaf-green/30">Featured Recipe</h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img
                  src={featuredRecipe.strMealThumb}
                  alt={featuredRecipe.strMeal}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3 text-dark dark:text-white">{featuredRecipe.strMeal}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{featuredRecipe.strInstructions.substring(0, 200)}...</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-bg-primary/10 text-text-primary dark:text-text-primary-light px-3 py-1 rounded-full text-sm font-medium">
                    {featuredRecipe.strCategory}
                  </span>
                  <span className="bg-bg-primary/10 text-text-primary dark:text-text-primary-light px-3 py-1 rounded-full text-sm font-medium">
                    {featuredRecipe.strArea}
                  </span>
                </div>
                <a
                  href={`/recipe/${featuredRecipe.idMeal}`}
                  className="inline-block bg-bg-primary hover:bg-bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  View Recipe
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-dark dark:text-white border-b pb-2 border-leaf-green/30">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.idCategory} category={category} />
          ))}
        </div>
      </section>

      {/* Seafood Recipes */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-dark dark:text-white">Seafood Specials</h2>
          <a href="/category/Seafood" className="text-text-primary dark:text-text-primary-light font-medium hover:underline">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seafoodRecipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  )
}