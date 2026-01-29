export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-dark dark:text-black">Privacy Policy</h1>
        
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Last updated: December 2023
            </p>
            
            <h2 className="text-2xl font-bold text-leaf-green dark:text-leaf-green-light mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us when you use our website. This includes:
            </p>
            <ul className="mb-6 list-disc pl-5 space-y-2">
              <li>Recipe preferences and saved recipes</li>
              <li>Newsletter subscription information</li>
              <li>Contact information when you reach out to us</li>
              <li>Usage data and analytics</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-leaf-green dark:text-leaf-green-light mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="mb-6 list-disc pl-5 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Send you newsletters and updates (with your consent)</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze usage patterns</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-leaf-green dark:text-leaf-green-light mb-4">3. Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h2 className="text-2xl font-bold text-leaf-green dark:text-leaf-green-light mb-4">4. Third-Party Services</h2>
            <p className="mb-6">
              Our website uses TheMealDB API to fetch recipe data. We recommend reviewing their privacy policy for information on how they handle data.
            </p>
            
            <h2 className="text-2xl font-bold text-leaf-green dark:text-leaf-green-light mb-4">5. Contact Us</h2>
            <p className="mb-2">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-leaf-green dark:text-leaf-green-light">
              privacy@tastyrecipes.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}