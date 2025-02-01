import Link from "next/link"
import { ShoppingCart, UtensilsCrossed, Coffee, IceCream, Pizza, ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const categories = [
    { name: "Local Dishes", icon: ChefHat, route: "/menu/local-dishes" },
    { name: "Fast Food", icon: Pizza, route: "/menu/fast-food" },
    { name: "Drinks", icon: Coffee, route: "/menu/drinks" },
    { name: "Desserts", icon: IceCream, route: "/menu/desserts" },
    { name: "Snacks", icon: UtensilsCrossed, route: "/menu/snacks" },
    { name: "Specials", icon: ShoppingCart, route: "/menu/specials" },
  ]

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <img 
          src="/food promotion  (7).jpg" 
          alt="banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">Delicious Food at Your Doorstep</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Order now and experience the taste of Ghana</p>
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-lg px-6 py-3 transition">
            <Link href="/menu">Order Now</Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">Our Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                href={category.route}
                key={category.name}
                className="group bg-white shadow-lg rounded-xl p-8 text-center transition transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-20 h-20 mx-auto flex items-center justify-center bg-orange-100 rounded-full group-hover:bg-orange-500 transition duration-300">
                  <category.icon className="w-12 h-12 text-orange-500 group-hover:text-white transition duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mt-4 group-hover:text-orange-600 transition">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
