import { GlareCard } from "../ui/glare-card"

const serviceData = [
    {
        id: 1,
        image: "../../../public/images/laptop.jpg",
        name: "Laptop",
    },
    {
        id: 1,
        image: "../../../public/images/laptop.jpg",
        name: "Laptop",
    },
    {
        id: 1,
        image: "../../../public/images/laptop.jpg",
        name: "Laptop",
    },
    {
        id: 1,
        image: "../../../public/images/laptop.jpg",
        name: "Laptop",
    },
    {
        id: 1,
        image: "../../../public/images/laptop.jpg",
        name: "Laptop",
    },
]


const ServiceSection = () => {
    return (
        <section className="flex flex-col justify-center gap-4 h-screen my-10">
            <div className="text-center">
                <h1 className="text-4xl font-bold">
                    our services
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptatibus.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {serviceData.map((service) => (
                    <GlareCard className="bg-accent">
                        <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover"
                        />
                    </GlareCard>
                ))}
            </div>
        </section>
    )
}

export default ServiceSection