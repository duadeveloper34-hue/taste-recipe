
import React from 'react';
import Link from 'next/link';


const CategoryCard = ({ category }) => {
  return (
    <Link href={`/category/${category.strCategory}`}>
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        <div className="h-32 overflow-hidden">
          <img 
            src={category.strCategoryThumb} 
            alt={category.strCategory}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="font-bold text-dark dark:text-white">{category.strCategory}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{category.strCategoryDescription.substring(0, 60)}...</p>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard