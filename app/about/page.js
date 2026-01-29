export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-dark dark:text-white">About TastyRecipes</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-leaf-green dark:text-leaf-green-light">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            At TastyRecipes, our mission is to make cooking accessible, enjoyable, and delicious for everyone. 
            Whether you're a beginner cook or a seasoned chef, we provide recipes that are easy to follow and 
            guaranteed to impress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-dark dark:text-white">What We Offer</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-leaf-green mr-2">✓</span>
                <span>Thousands of curated recipes from around the world</span>
              </li>
              <li className="flex items-start">
                <span className="text-leaf-green mr-2">✓</span>
                <span>Step-by-step cooking instructions</span>
              </li>
              <li className="flex items-start">
                <span className="text-leaf-green mr-2">✓</span>
                <span>Ingredient measurement adjustments</span>
              </li>
              <li className="flex items-start">
                <span className="text-leaf-green mr-2">✓</span>
                <span>Video tutorials for complex recipes</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-dark dark:text-white">Our Values</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-leaf-green mr-2">❤️</span>
                <span>Quality recipes that actually work</span>
              </li>
              <li className="flex items-start">
                <span className="text-leaf-green mr-2">🌍</span>
                <span>Celebrating diverse cuisines</span>
              </li>
              <li className="flex items-start">
                <span className="text-leaf-green mr-2">👨‍👩‍👧‍👦</span>
                <span>Cooking for all skill levels</span>
              </li>
              <li className="flex items-start">
                <span className="text-leaf-green mr-2">🕒</span>
                <span>Respecting your time in the kitchen</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}