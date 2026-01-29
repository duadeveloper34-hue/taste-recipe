'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Check for saved theme or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, [])

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setDarkMode(true)
    }
  }

  const navLinks = [
    { name: 'Home', href: '/' },
  { name: 'Categories', href: '/categories' },
  { name: 'Featured', href: '/featured' }, 
  { name: 'About', href: '/about' }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-green-300 dark:bg-dark shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-leaf-green rounded-full flex items-center justify-center">
              <img className="text-white font-bold text-xl" src="/bowlpng.png" alt="Logo" />
              </div>
              <span className="text-2xl font-bold text-leaf-green dark:text-leaf-green-light">TastyRecipes</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${pathname === link.href ? 'text-dark dark:text-green-700 font-semibold' : 'hover:text-leaf-green dark:hover:text-leaf-green-light'}`}
              >
                {link.name}
              </Link>
            ))}
            {/* <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-off-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <span className="text-yellow-500">☀️</span>
              ) : (
                <span className="text-gray-700">🌙</span>
              )}
            </button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-off-white dark:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <span className="text-yellow-500">☀️</span>
              ) : (
                <span className="text-gray-700">🌙</span>
              )}
            </button> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark dark:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium px-2 py-1 rounded ${pathname === link.href ? 'text-leaf-green dark:text-leaf-green-light bg-leaf-green/10' : 'hover:text-leaf-green dark:hover:text-leaf-green-light'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar