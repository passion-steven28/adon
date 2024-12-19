import ProductCard from "@/components/shared/product-card"

const productData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Product Name",
        category: "Laptop",
        description: "this is a descriptions",
        price: 1000,
        discount: 10,
        rating: 4.5,
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Product Name",
        category: "Laptop",
        description: "this is a descriptions",
        price: 1000,
        discount: 10,
        rating: 4.5,
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Product Name",
        category: "Laptop",
        description: "this is a descriptions",
        price: 1000,
        discount: 10,
        rating: 4.5,
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Product Name",
        category: "Laptop",
        description: "this is a descriptions",
        price: 1000,
        discount: 10,
        rating: 4.5,
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Product Name",
        category: "Laptop",
        description: "this is a descriptions",
        price: 1000,
        discount: 10,
        rating: 4.5,
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Product Name",
        category: "Laptop",
        description: "this is a descriptions",
        price: 1000,
        discount: 10,
        rating: 4.5,
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Product Name",
        category: "Laptop",
        description: "this is a descriptions",
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

            <section className='col-start-3 col-end-11'>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {productData.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            category={product.category}
                            description={product.description}
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