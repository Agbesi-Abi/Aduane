import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const menuItems = {
  "local-dishes": [
    { id: 1, name: "Jollof Rice", price: 25, image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "Waakye", price: 20, image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Fufu with Light Soup", price: 30, image: "/placeholder.svg?height=200&width=200" },
  ],
  "fast-food": [
    { id: 4, name: "Burger", price: 15, image: "/placeholder.svg?height=200&width=200" },
    { id: 5, name: "Pizza", price: 20, image: "/placeholder.svg?height=200&width=200" },
    { id: 6, name: "Fried Chicken", price: 18, image: "/placeholder.svg?height=200&width=200" },
  ],
  drinks: [
    { id: 7, name: "Sobolo", price: 5, image: "/placeholder.svg?height=200&width=200" },
    { id: 8, name: "Asaana", price: 6, image: "/placeholder.svg?height=200&width=200" },
    { id: 9, name: "Palm Wine", price: 8, image: "/placeholder.svg?height=200&width=200" },
  ],
  desserts: [
    { id: 10, name: "Bofrot", price: 10, image: "/placeholder.svg?height=200&width=200" },
    { id: 11, name: "Yakeyake", price: 12, image: "/placeholder.svg?height=200&width=200" },
    { id: 12, name: "Hausa Koko with Koose", price: 15, image: "/placeholder.svg?height=200&width=200" },
  ],
  snacks: [
    { id: 13, name: "Kelewele", price: 8, image: "/placeholder.svg?height=200&width=200" },
    { id: 14, name: "Meat Pie", price: 7, image: "/placeholder.svg?height=200&width=200" },
    { id: 15, name: "Chin Chin", price: 5, image: "/placeholder.svg?height=200&width=200" },
  ],
  specials: [
    { id: 16, name: "Banku with Tilapia", price: 35, image: "/placeholder.svg?height=200&width=200" },
    { id: 17, name: "Groundnut Soup with Fufu", price: 28, image: "/placeholder.svg?height=200&width=200" },
    { id: 18, name: "Kontomire Stew with Yam", price: 25, image: "/placeholder.svg?height=200&width=200" },
  ],
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category
  const items = menuItems[category as keyof typeof menuItems] || []

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center capitalize">{category.replace("-", " ")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover mb-4"
              />
              <p className="text-2xl font-bold text-orange-500">₵{item.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

