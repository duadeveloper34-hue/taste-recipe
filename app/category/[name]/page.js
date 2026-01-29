'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import RecipeCard from "../../components/RecipeCard";

export default function CategoryRecipes() {
    const params = useParams()
    const [recipes, setRecipes] = useState([])
    const [categoryInfo, setCategoryInfo] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (params.name) {
            fetchRecipes(params.name)
        }
    }, [params.name])

    const fetchRecipes = async (categoryName) => {
        try {
            setLoading(true)

            // Fetch recipes for the category
            const recipesResponse = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
            if (recipesResponse.data.meals) {
                setRecipes(recipesResponse.data.meals)
            }

            // Fetch category info
            const categoriesResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            if (categoriesResponse.data.categories) {
                const category = categoriesResponse.data.categories.find(cat => cat.strCategory === categoryName)
                setCategoryInfo(category)
            }

        } catch (error) {
            console.error('Error fetching category recipes:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-leaf-green"></div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Loading recipes...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Category Header */}
            {categoryInfo && (
                <div className="mb-10">
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                        <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-lg">
                            <img
                                src={categoryInfo.strCategoryThumb}
                                alt={categoryInfo.strCategory}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl font-bold mb-3 text-dark dark:text-white">{categoryInfo.strCategory} Recipes</h1>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                                {categoryInfo.strCategoryDescription}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Recipes Grid */}
            {recipes.length > 0 ? (
                <>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-dark dark:text-white">
                            {recipes.length} {params.name} Recipes
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {recipes.map((recipe) => (
                            <RecipeCard key={recipe.idMeal} recipe={recipe} />
                        ))}
                    </div>
                </>
            ) : (
                <div className="text-center py-12">
                    <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">No recipes found</h3>
                    <p className="text-gray-600 dark:text-gray-400">We couldn't find any recipes for this category.</p>
                </div>
            )}
        </div>
    )
}