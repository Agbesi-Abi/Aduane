import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aduane - Delicious Food Delivery",
  description: "Order delicious Ghanaian food online",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-orange-500 text-white">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">
                Aduane
              </Link>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <Link href="/menu" className="hover:text-orange-200">
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-orange-200">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-orange-200">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/cart" className="hover:text-orange-200">
                      <ShoppingCart className="inline-block" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="bg-orange-500 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; 2023 Aduane. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

