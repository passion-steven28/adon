import ProductLayouts from "../layout/product-layouts"
import ProductCard from "../shared/product-card"

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