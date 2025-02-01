import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const menuItems = [
  { id: 1, name: "Jollof Rice", price: 25, image: "/food(2).jpg" },
  { id: 2, name: "Waakye", price: 20, image: "/food promotion  (4).jpg" },
  { id: 3, name: "Fufu with Light Soup", price: 30, image: "/food promotion  (5).jpg" },
  { id: 4, name: "Banku with Tilapia", price: 35, image: "/food promotion  (6).jpg" },
  { id: 5, name: "Kelewele", price: 15, image: "/food promotion  (7).jpg" },
  { id: 6, name: "Red Red", price: 25, image: "/food promotion  (8).jpg" },
]

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
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

