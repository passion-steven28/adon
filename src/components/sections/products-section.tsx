import { useEffect, useState } from "react"
import ProductLayouts from "../layout/product-layouts"
import ProductCard from "../shared/product-card"
import createClient from "../../lib/client";
import { urlFor } from "@/lib/urlFor";

export interface SanityProduct {
    brand: {
        _ref: string;
        _type: string;
    };
    features: string[];
    images: Array<{
        _key: string;
        asset: {
            _ref: string;
        };
    }>;
    name: string;
    price: number;
    description: import('@portabletext/react').PortableTextBlock[];
    productType: string;
    slug: {
        current: string;
        _type: string;
    };
    specifications: {
        display: string;
        graphics: string;
        operatingSystem: string;
        processor: string;
        ram: string;
        storage: string;
    };
    stockQuantity: number;
}

const ProductsSection = () => {
    const [products, setProducts] = useState<SanityProduct[]>([])

    useEffect(() => {
        createClient.fetch(`
            *[_type == "product"]{
            name,
            slug,
            brand,
            productType,
            stockQuantity,
            specifications,
            images,
            features,
            price,
            description,
            }
        `).then((data: SanityProduct[]) => {
            setProducts(data)
        })
        .catch(console.error)
    }, [])

    console.log(products)

    return (
        <div>
            <ProductLayouts
                title="New Arrivals"
                children={
                    products?.map((product: SanityProduct) => (
                        <ProductCard
                            key={product.slug.current}
                            id={product.slug.current}
                            image={urlFor(product.images[0]).url()}
                            name={product.name}
                            description={product.description}
                            descriptions={product.specifications}
                            category={product.productType}
                            price={product.price}
                            discount={product.features.includes('discount') ? 10 : 0}
                        />
                    ))
                }
            />
        </div>
    )
}

export default ProductsSection