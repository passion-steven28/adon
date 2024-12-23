import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import { urlFor } from "@/lib/urlFor"
import { PortableText } from '@portabletext/react'
import { Phone } from "lucide-react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"


type Props = {
    id: string
    image: string
    name: string
    category: string
    price: number
    description: import('@portabletext/react').PortableTextBlock[]
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

const ProductCard = ({ image, name, description, descriptions, category, price, discount }: Props) => {

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
                        <SheetContent className="overflow-auto">
                            <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
                                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                                    <div className="">
                                        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                                            <img
                                                className="w-full dark:hidden"
                                                src={urlFor(image).url()}
                                                alt=""
                                            />
                                        </div>

                                        <div className="mt-6 sm:mt-8 lg:mt-0">
                                            <h1
                                                className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                                            >
                                                {name}, {descriptions.processor}, {descriptions.ram} RAM, {descriptions.storage} SSD, {descriptions.operatingSystem} OS, {descriptions.graphics} Graphics
                                            </h1>
                                            <div className="flex flex-col my-4">
                                                <p
                                                    className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                                                >
                                                    Tsh {price}
                                                </p>

                                                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                                    <div className="flex items-center gap-1">
                                                        <svg
                                                            className="w-4 h-4 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                            />
                                                        </svg>
                                                        <svg
                                                            className="w-4 h-4 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                            />
                                                        </svg>
                                                        <svg
                                                            className="w-4 h-4 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                            />
                                                        </svg>
                                                        <svg
                                                            className="w-4 h-4 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                            />
                                                        </svg>
                                                        <svg
                                                            className="w-4 h-4 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <p
                                                        className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
                                                    >
                                                        (5.0)
                                                    </p>
                                                    <a
                                                        href="#"
                                                        className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                                                    >
                                                        345 Reviews
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                                                <Button
                                                >
                                                    <a
                                                        href={`https://wa.me/255747776063?text=Hello, I'm interested in buying:%0a${name}%0aProcessor: ${descriptions.processor}%0aRAM: ${descriptions.ram}%0aStorage: ${descriptions.storage}%0aPrice: Tsh${price}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2"
                                                    >
                                                        <Phone />
                                                        +255 0747776063
                                                    </a>
                                                </Button>

                                                <Button
                                                    variant={'secondary'}
                                                >
                                                    <svg
                                                        className="w-5 h-5 -ms-2 me-2"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                                        />
                                                    </svg>

                                                    Order Now
                                                </Button>
                                            </div>

                                            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                                            <p className="mb-6 text-gray-500 dark:text-gray-400 text-sm">
                                                <PortableText
                                                    value={description}
                                                    components={{}}
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </Card>
    )
}

export default ProductCard