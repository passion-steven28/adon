import { Card } from "../ui/card"
import { GlareCard } from "../ui/glare-card"

type Props = {
    id: number
    image: string
    name: string
    category: string
    price: number
    discount: number
    rating?: number
}

const ProductCard = ({ image, name, category, price, discount }: Props) => {
    return (
        <Card className="bg-accent overflow-hidden">
            <div className="relative overflow-hidden w-full h-[15rem]">
                <div className="flex flex-row items-center justify-between absolute top-5 right-5 p-1 bg-primary text-white rounded-full">
                    {discount}%
                </div>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="px-4 py-1">
                <h1 className="text-left text-2xl font-bold">
                    {name}
                </h1>
                <p className="text-left text-sm">
                    {category}
                </p>
                <h3>
                    <span className="text-primary font-bold">Tsh{price}</span>
                </h3>
            </div>
        </Card>
    )
}

export default ProductCard