'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-dark dark:text-white">Contact Us</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-leaf-green dark:text-leaf-green-light">Send us a Message</h2>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-dark dark:text-white focus:ring-2 focus:ring-leaf-green focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-dark dark:text-white focus:ring-2 focus:ring-leaf-green focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-dark dark:text-white focus:ring-2 focus:ring-leaf-green focus:border-transparent transition-all"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-dark dark:text-white focus:ring-2 focus:ring-leaf-green focus:border-transparent transition-all"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-700 hover:bg-leaf-green-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></span>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-leaf-green dark:text-leaf-green-light">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-leaf-green/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-leaf-green text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-dark dark:text-white">Our Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Food Street<br />
                      Culinary City, CC 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-leaf-green/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-leaf-green text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-dark dark:text-white">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="mailto:duadeveloper34@gmail.com" className="hover:text-leaf-green transition-colors">
                        duadeveloper34@gmail.com
                      </a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      <a href="mailto:duaf3292@gmail.com" className="hover:text-leaf-green transition-colors">
                        duaf3292@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-leaf-green/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-leaf-green text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-dark dark:text-white">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="tel:+11234567890" className="hover:text-leaf-green transition-colors">
                        +92 304 0670987
                      </a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      Monday - Friday: 9AM - 6PM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-dark dark:text-white">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-leaf-green dark:text-leaf-green-light mb-1">
                    Are the recipes free to use?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Yes, all recipes on TastyRecipes are completely free to access and use.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-leaf-green dark:text-leaf-green-light mb-1">
                    Can I submit my own recipe?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Currently, we only feature recipes from TheMealDB API, but we're working on user submissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}