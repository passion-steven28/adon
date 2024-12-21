import ProductCard from "@/components/shared/product-card"
import createClient from "@/lib/client";
import { urlFor } from "@/lib/urlFor";
import { useEffect, useState } from "react";

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


const Shop = () => {
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
                }
            `).then((data: SanityProduct[]) => {
            setProducts(data)
        })
            .catch(console.error)
    }, [])

    return (
        <main className="grid grid-cols-12 gap-4 min-h-screen">
            <div className='col-start-1 col-end-13 bg-accent h-[20vh] flex flex-col justify-center items-center'>
                <h1 className="text-4xl font-bold uppercase">
                    Shop
                </h1>
            </div>

            <section className='col-start-3 col-end-11'>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products?.map((product: SanityProduct) => (
                        <ProductCard
                            key={product.slug.current}
                            id={product.slug.current}
                            image={urlFor(product.images[0]).url()}
                            name={product.name}
                            descriptions={product.specifications}
                            category={product.productType}
                            price={product.price}
                            discount={product.features.includes('discount') ? 10 : 0}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Shop