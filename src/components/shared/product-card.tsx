import { Button } from "../ui/button"
import { Card } from "../ui/card"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from "../ui/label"
import { Input } from "../ui/input"


type Props = {
    id: string
    image: string
    name: string
    category: string
    price: number
    descriptions: {
        display: string;
        graphics: string;
        operatingSystem: string;
        processor: string;
        ram: string;
        storage: string;
    }
    discount?: number
    rating?: number
}

const ProductCard = ({ image, name, descriptions, category, price, discount }: Props) => {
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
                <div className="flex flex-row items-center justify-between">
                    <h3>
                        <span className="text-primary font-bold">Tsh{price}</span>
                    </h3>
                    <Sheet>
                        <SheetTrigger>
                            <Button>
                                Buy Now
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="bg-accent">
                            <div className="relative w-full mt-10">
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                            <SheetHeader>
                                <SheetTitle>{name}</SheetTitle>
                                <SheetDescription>
                                    {Object.values(descriptions).map((description: string, index: number) => (
                                        <p key={index}>{description}</p>
                                    ))}
                                </SheetDescription>
                            </SheetHeader>
                            <SheetFooter>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Full name
                                        </Label>
                                        <Input id="name" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="phone" className="text-right">
                                            Phone NO
                                        </Label>
                                        <Input id="phone" type="tel" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username" className="text-right">
                                            address
                                        </Label>
                                        <Input id="address" type="text" className="col-span-3" />
                                    </div>
                                    <SheetClose asChild>
                                        <Button>Save changes</Button>
                                    </SheetClose>
                                </div>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </Card>
    )
}

export default ProductCard