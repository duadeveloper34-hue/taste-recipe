'use client'

import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/dua.fati09/' },
    { name: 'Twitter', icon: 'linkedin', href: 'https://www.linkedin.com/in/dua-fatima-developer/' },
    { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/dua_frontend_developer/' },
    { name: 'Pinterest', icon: 'github', href: 'https://github.com/duadeveloper34-hue' },
  ]

  return (
    <footer className="bg-green-700 dark:bg-leaf-green-dark text-white py-10 md:py-16 mt-10 md:mt-16">
      <div className="container mx-auto px-4 py-10 md:py-16 ">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div>
            <Link href={'/'} className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img className="text-white font-bold text-xl" src="/bowlpng.png" alt="Logo" />
              </div>
              <h3 className="text-2xl font-bold">TastyRecipes</h3>
            </Link>
            <p className="text-leaf-green-light mb-4">
              Discover delicious recipes from around the world. Cooking made simple and fun for everyone.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link target="blank"
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-lightgreen/20 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-lg">
                    {social.icon === 'facebook' && 'f'}
                    {social.icon === 'linkedin' && 'L'}
                    {social.icon === 'instagram' && 'I'}
                    {social.icon === 'github' && 'G'}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 pb-2 border-b border-white/20">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-leaf-green-light hover:text-gray transition-colors hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xl font-bold mb-6 pb-2 border-b border-white/20">Popular Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/category/Seafood" className="text-green-light hover:text-gray transition-colors hover:underline">
                  Seafood
                </Link>
              </li>
              <li>
                <Link href="/category/Beef" className="text-green-light hover:text-gray transition-colors hover:underline">
                  Beef
                </Link>
              </li>
              <li>
                <Link href="/category/Chicken" className="text-green-light hover:text-gray transition-colors hover:underline">
                  Chicken
                </Link>
              </li>
              <li>
                <Link href="/category/Dessert" className="text-green-light hover:text-gray transition-colors hover:underline">
                  Dessert
                </Link>
              </li>
              <li>
                <Link href="/category/Vegetarian" className="text-green-light hover:text-gray transition-colors hover:underline">
                  Vegetarian
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6 pb-2 border-b border-white/20">Stay Updated</h4>
            <p className="mb-4 text-leaf-green-light">
              Subscribe to our newsletter for weekly recipe inspiration.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-700 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                className="w-full bg-black border-amber-50  text-white font-semibold py-3 px-4 rounded-lg hover:bg-black-1000"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Middle Divider */}
        <div className="border-t border-white/20 pt-8 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h5 className="text-lg font-bold mb-2">Download Our App</h5>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-black/20 px-4 py-2 rounded-lg hover:bg-black/30 transition-colors">
                  <span className="text-2xl">📱</span>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
                <button className="flex items-center space-x-2 bg-black/20 px-4 py-2 rounded-lg hover:bg-black/30 transition-colors">
                  <span className="text-2xl">📱</span>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4 flex-wrap">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🍳</span>
                  <span className="font-semibold">10,000+</span>
                  <span className="text-leaf-green-light">Recipes</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">👨‍🍳</span>
                  <span className="font-semibold">500+</span>
                  <span className="text-leaf-green-light">Chefs</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">⭐</span>
                  <span className="font-semibold">4.8</span>
                  <span className="text-leaf-green-light">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-leaf-green-light">
                © {currentYear} TastyRecipes. All rights reserved.
              </p>

            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {footerLinks.slice(4).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-leaf-green-light hover:text-white transition-colors hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Attribution */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center text-sm text-shadow-black/60">
            <p>
              Made by Dua Fatima with ❤️ for food lovers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer