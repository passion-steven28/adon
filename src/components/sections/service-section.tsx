import { GlareCard } from "../ui/glare-card"

const serviceData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1731616331098-739bf45618f7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Laptop",
    },
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Laptop",
    },
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=1355&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Laptop",
    },
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Laptop",
    },
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1515054562254-30a1b0ebe227?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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