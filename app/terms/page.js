export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-dark dark:text-white">Terms of Service</h1>
        
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Effective date: December 2023
            </p>
            
            <h2 className="text-2xl font-bold text-leaf-green dark:text-leaf-green-light mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using TastyRecipes, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-bold text-leaf-green dark:text-leaf-green-light mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily use TastyRecipes for personal, non-commercial transitory viewing only.
            </p>
            <p className="mb-6">
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="mb-6 list-disc pl-5 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person or "mirror" the materials</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-leaf-green dark:text-leaf-green-light mb-4">3. Disclaimer</h2>
            <p className="mb-6">
              The materials on TastyRecipes are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2 className="text-2xl font-bold text-leaf-green dark:text-leaf-green-light mb-4">4. Limitations</h2>
            <p className="mb-6">
              In no event shall TastyRecipes or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
            </p>
            
            <h2 className="text-2xl font-bold text-leaf-green dark:text-leaf-green-light mb-4">5. Accuracy of Materials</h2>
            <p className="mb-6">
              The materials appearing on TastyRecipes could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete or current.
            </p>
            
            <h2 className="text-2xl font-bold text-leaf-green dark:text-leaf-green-light mb-4">6. Links</h2>
            <p className="mb-6">
              We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by TastyRecipes.
            </p>
            
            <h2 className="text-2xl font-bold text-leaf-green dark:text-leaf-green-light mb-4">7. Modifications</h2>
            <p className="mb-6">
              We may revise these terms of service for our website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
            
            <h2 className="text-2xl font-bold text-leaf-green dark:text-leaf-green-light mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}