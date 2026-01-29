'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'

export default function RecipeDetail() {
    // Fetch recipe details
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true)
    const [servings, setServings] = useState(1)

    useEffect(() => {
        if (id) {
            fetchRecipe(id)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps 

    }, [id])

    const fetchRecipe = async (id) => {
        try {
            setLoading(true)
            // Fetch recipe details
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            if (response.data.meals && response.data.meals.length > 0) {
                setRecipe(response.data.meals[0])
                setServings(response.data.meals[0].strServings)
                console.log(response.data.meals[0])
                console.log(response.data.meals[0].strServings)
            }
        } catch (error) {
            console.error('Error fetching recipe:', error)
        } finally {
            setLoading(false)
        }
    }

    // Extract ingredients and measurements
    const getIngredients = () => {
        if (!recipe) return []
        const ingredients = []
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe[`strIngredient${i}`]
            const measure = recipe[`strMeasure${i}`]
            if (ingredient && ingredient.trim() !== '') {
                ingredients.push({
                    ingredient,
                    measure: measure || 'to taste'
                })
            }
        }
        return ingredients
    }

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-leaf-green"></div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Loading recipe details...</p>
                </div>
            </div>
        )
    }

    if (!recipe) {
        return (
            <div className="container mx-auto px-4 py-12 text-center min-h-[60vh]">
                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Recipe not found</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">The recipe you're looking for doesn't exist.</p>
                <Link href="/" className="inline-block mt-6 bg-leaf-green text-white py-2 px-6 rounded-lg hover:bg-leaf-green-dark transition-colors">
                    Back to Home
                </Link>
            </div>
        )
    }

    const ingredients = getIngredients()

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href="/" className="inline-flex items-center text-leaf-green dark:text-leaf-green-light hover:underline mb-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Recipes
            </Link>

            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                {/* Recipe Header */}
                <div className="relative">
                    <img
                        src={recipe.strMealThumb}
                        alt={recipe.strMeal}
                        className="w-full h-64 md:h-96 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-black">{recipe.strMeal}</h1>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <span className="bg-leaf-green text-black px-3 py-1 rounded-full text-sm font-medium">
                                {recipe.strCategory}
                            </span>
                            <span className="bg-leaf-green/80 text-black px-3 py-1 rounded-full text-sm font-medium">
                                {recipe.strArea}
                            </span>
                            {recipe.strTags && (
                                <span className="bg-white/20 text-black px-3 py-1 rounded-full text-sm font-medium">
                                    {recipe.strTags.split(',').slice(0, 2).join(', ')}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Column - Ingredients */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-6">
                                <div className="bg-off-white dark:bg-gray-900 rounded-xl p-6 mb-6">
                                    <h2 className="text-2xl font-bold mb-4 text-dark dark:text-white">Ingredients</h2>

                                    {/* <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Servings: {servings}</label>
                                        <div className="flex items-center space-x-4">
                                            <button
                                                onClick={() => setServings(Math.max(1, servings - 1))}
                                                className="w-10 h-10 rounded-full bg-leaf-green/20 text-leaf-green dark:text-leaf-green-light flex items-center justify-center hover:bg-leaf-green/30"
                                            >
                                                <span className="text-xl">-</span>
                                            </button>
                                            <span className="text-xl font-semibold">{servings}</span>
                                            <button
                                                onClick={() => setServings(servings + 1)}
                                                className="w-10 h-10 rounded-full bg-leaf-green/20 text-leaf-green dark:text-leaf-green-light flex items-center justify-center hover:bg-leaf-green/30"
                                            >
                                                <span className="text-xl">+</span>
                                            </button>
                                        </div>
                                    </div> */}

                                    <ul className="space-y-3">
                                        {ingredients.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="inline-block w-2 h-2 bg-leaf-green rounded-full mt-2 mr-3"></span>
                                                <span className="text-dark dark:text-gray-300">
                                                    <span className="font-medium">{item.measure}</span> {item.ingredient}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {recipe.strYoutube && (
                                    <div className="bg-leaf-green/10 rounded-xl p-6">
                                        <h3 className="text-xl font-bold mb-3 text-dark dark:text-white">Video Tutorial</h3>
                                        <a
                                            href={recipe.strYoutube}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                            </svg>
                                            Watch on YouTube
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column - Instructions */}
                        <div className="lg:w-2/3">
                            <div className="prose prose-lg max-w-none dark:prose-invert">
                                <h2 className="text-2xl font-bold mb-6 text-dark dark:text-white">Instructions</h2>
                                <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {recipe.strInstructions}
                                </div>
                            </div>

                            {/* {recipe.strSource && (
                                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <h3 className="text-xl font-bold mb-3 text-dark dark:text-white">Source</h3>
                                    <a
                                        href={recipe.strSource}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-leaf-green dark:text-leaf-green-light hover:underline"
                                    >
                                        {recipe.strSource}
                                    </a>
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}