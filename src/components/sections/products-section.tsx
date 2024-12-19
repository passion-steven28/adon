import ProductLayouts from "../layout/product-layouts"
import ProductCard from "../shared/product-card"

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
]

const ProductsSection = () => {
    return (
        <div>
            <ProductLayouts
                title="New Arrivals"
                chidren={
                    productData.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            description={product.description}
                            category={product.category}
                            price={product.price}
                            discount={product.discount}
                        />
                    ))
                }
            />
        </div>
    )
}

export default ProductsSection