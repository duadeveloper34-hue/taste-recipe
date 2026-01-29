'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import RecipeCard from '../components/RecipeCard'

export default function FeaturedPage() {
  const [featuredRecipes, setFeaturedRecipes] = useState([])
  const [popularCategories, setPopularCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('all')

  // Featured recipes IDs from different categories
  const featuredRecipeIds = [
    '52772', // Teriyaki Chicken Casserole
    '53013', // Beef Dumpling Stew
    '52977', // Corba
    '53060', // Burek
    '52948', // Wontons
    '52844', // Lasagne
    '52929', // Timbits
    '53049', // Apam balik
    '52971', // Kafteji
    '52819', // Cullen Skink
  ]

  const popularCategoryNames = ['Beef', 'Chicken', 'Dessert', 'Vegetarian', 'Pasta', 'Seafood']

  useEffect(() => {
    fetchFeaturedData()
  }, [])

  const fetchFeaturedData = async () => {
    try {
      setLoading(true)

      // Fetch all featured recipes
      const recipePromises = featuredRecipeIds.map(id =>
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      )

      const recipeResponses = await Promise.all(recipePromises)
      const recipes = recipeResponses
        .filter(response => response.data.meals && response.data.meals.length > 0)
        .map(response => response.data.meals[0])

      setFeaturedRecipes(recipes)

      // Fetch popular categories
      const categoriesResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      if (categoriesResponse.data.categories) {
        const filteredCategories = categoriesResponse.data.categories.filter(cat =>
          popularCategoryNames.includes(cat.strCategory)
        )
        setPopularCategories(filteredCategories)
      }

    } catch (error) {
      console.error('Error fetching featured data:', error)
    } finally {
      setLoading(false)
    }
  }

  // Filter recipes by category
  const getFilteredRecipes = () => {
    if (activeTab === 'all') return featuredRecipes
    return featuredRecipes.filter(recipe => recipe.strCategory === activeTab)
  }

  // Get unique categories from featured recipes
  const recipeCategories = [...new Set(featuredRecipes.map(recipe => recipe.strCategory))]

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-leaf-green"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Loading featured recipes...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-dark dark:text-black">
          Featured Recipes
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
          Discover our handpicked collection of exceptional recipes from around the world. 
          These are the most loved, most cooked, and most shared recipes in our collection.
        </p>
        <div className="flex items-center justify-center space-x-2 text-leaf-green dark:text-leaf-green-light">
          <span className="text-2xl">⭐</span>
          <span className="font-semibold">Chef's Choice</span>
          <span className="text-2xl">👨‍🍳</span>
          <span className="font-semibold">Community Favorites</span>
          <span className="text-2xl">🔥</span>
          <span className="font-semibold">Trending Now</span>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
          <div className="text-3xl font-bold text-leaf-green dark:text-leaf-green-light mb-2">
            {featuredRecipes.length}
          </div>
          <div className="text-gray-600 dark:text-gray-400">Featured Recipes</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
          <div className="text-3xl font-bold text-leaf-green dark:text-leaf-green-light mb-2">
            {recipeCategories.length}
          </div>
          <div className="text-gray-600 dark:text-gray-400">Categories</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
          <div className="text-3xl font-bold text-leaf-green dark:text-leaf-green-light mb-2">
            15+
          </div>
          <div className="text-gray-600 dark:text-gray-400">Countries</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
          <div className="text-3xl font-bold text-leaf-green dark:text-leaf-green-light mb-2">
            4.8
          </div>
          <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-dark dark:text-white">Browse by Category</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 rounded-full font-medium transition-all ${activeTab === 'all' 
              ? 'bg-leaf-green text-white' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            All Recipes
          </button>
          
          {recipeCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${activeTab === category 
                ? 'bg-leaf-green text-white' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Recipes Grid */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-dark dark:text-white">
            {activeTab === 'all' ? 'All Featured Recipes' : `${activeTab} Recipes`}
            <span className="text-leaf-green dark:text-leaf-green-light text-xl ml-2">
              ({getFilteredRecipes().length})
            </span>
          </h2>
        </div>

        {getFilteredRecipes().length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredRecipes().map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
            <div className="text-6xl mb-4">🍳</div>
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
              No recipes found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              No featured recipes available for {activeTab} category.
            </p>
            <button
              onClick={() => setActiveTab('all')}
              className="mt-6 bg-leaf-green hover:bg-leaf-green-dark text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              View All Recipes
            </button>
          </div>
        )}
      </div>

      {/* Popular Categories Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-dark dark:text-black text-center">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularCategories.map((category) => (
            <div
              key={category.idCategory}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              onClick={() => setActiveTab(category.strCategory)}
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-dark dark:text-white group-hover:text-leaf-green transition-colors">
                  {category.strCategory}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Collection */}
      <div className="bg-linear-to-r from-leaf-green to-leaf-green-light rounded-2xl p-8 md:p-12 text-black mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Chef's Special Collection</h2>
            <p className="text-lg mb-6 opacity-90">
              Access exclusive recipes curated by professional chefs. Learn cooking techniques, 
              plating styles, and professional tips to elevate your home cooking.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white text-leaf-green font-semibold py-3 px-6 rounded-lg hover:bg-off-white transition-colors">
                Explore Chef Recipes
              </button>
              <button className="bg-red-600 border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700">
                Watch Tutorials
              </button>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white mx-auto">
                <img
                  src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
                  alt="Chef's Special"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-leaf-green font-bold py-2 px-4 rounded-lg shadow-lg">
                👨‍🍳 Chef's Pick
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Featured Section */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-dark dark:text-white">
          Why These Recipes Are Featured
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-leaf-green">⭐</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-dark dark:text-white">Highest Ratings</h3>
            <p className="text-gray-600 dark:text-gray-400">
              These recipes have consistently received 5-star ratings from our community
            </p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-leaf-green">👨‍👩‍👧‍👦</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-dark dark:text-white">Family Favorite</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Loved by families and perfect for gatherings and special occasions
            </p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-leaf-green">⏱️</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-dark dark:text-white">Time-Tested</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Recipes that have stood the test of time with proven results
            </p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-leaf-green">🌍</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-dark dark:text-white">Global Appeal</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Represent diverse cuisines from different cultures around the world
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}