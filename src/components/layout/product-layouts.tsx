type Props = {
    title: string
    chidren: React.ReactNode
}

const ProductLayouts = ({ title, chidren }: Props) => {
    return (
        <section className="flex flex-col gap-4">
            <div>
                <h1 className="text-left text-4xl font-bold">
                    {title}
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {chidren}
            </div>
        </section>
    )
}

export default ProductLayouts