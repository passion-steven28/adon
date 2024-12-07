import ProductCard from "@/components/shared/product-card"

const productData = [
    {
        id: 1,
        image: "../../../public/images/laptop.jpg",
        name: "Product Name",
        category: "Laptop",
        price: 1000,
        discount: 10,
        rating: 4.5,
    },
    {
        id: 2,
        image: "../../../public/images/laptop.jpg",
        name: "Product Name",
        category: "Laptop",
        price: 1000,
        discount: 10,
        rating: 4.5,
    },
    {
        id: 3,
        image: "../../../public/images/laptop.jpg",
        name: "Product Name",
        category: "Laptop",
        price: 1000,
        discount: 10,
        rating: 4.5,
    },
    {
        id: 4,
        image: "../../../public/images/laptop.jpg",
        name: "Product Name",
        category: "Laptop",
        price: 1000,
        discount: 10,
        rating: 4.5,
    },
    {
        id: 5,
        image: "../../../public/images/laptop.jpg",
        name: "Product Name",
        category: "Laptop",
        price: 1000,
        discount: 10,
        rating: 4.5,
    },
    {
        id: 5,
        image: "../../../public/images/laptop.jpg",
        name: "Product Name",
        category: "Laptop",
        price: 1000,
        discount: 10,
        rating: 4.5,
    },
    {
        id: 5,
        image: "../../../public/images/laptop.jpg",
        name: "Product Name",
        category: "Laptop",
        price: 1000,
        discount: 10,
        rating: 4.5,
    },
]


const Shop = () => {
    return (
        <main className="grid grid-cols-12 gap-4 min-h-screen">
            <div className='col-start-1 col-end-13 bg-accent h-[20vh] flex flex-col justify-center items-center'>
                <h1 className="text-4xl font-bold uppercase">
                    Shop
                </h1>
            </div>

            <section className='col-start-3 col-end-10'>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {productData.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            category={product.category}
                            price={product.price}
                            discount={product.discount}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Shop