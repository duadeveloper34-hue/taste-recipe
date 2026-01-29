
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TastyRecipes - Discover Delicious Meals',
  description: 'Find and explore thousands of delicious recipes from around the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-off-white dark:bg-dark text-dark dark:text-off-white transition-colors duration-300`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}