import { Button } from "../ui/button"
import heroImage from "../../../public/images/hero.jpg"
import { Badge } from "../ui/badge"

const HeroSection = () => {
    return (
        <section className="flex flex-col justify-end gap-4 h-screen">
            <div className="flex flex-col items-center justify-evenly size-full space-x-10 px-10">
                <div className="flex flex-row items-center justify-center gap-4 w-[30rem]">
                    <img
                        src={heroImage}
                        alt="hero-image"
                        className="w-full h-full object-cover relative"
                    />
                </div>

                <div className="flex flex-col justify-center space-y-4">
                    <Badge
                        variant={'outline'}
                        className="w-fit"
                    >
                        get amaizing gadgets
                    </Badge>
                    <h1 className="text-4xl font-bold">
                        New Arrivals every week with discounts up to 20%
                    </h1>
                    <h3 className="text-2xl font-bold underline">starting at <span className="text-primary" >Tsh 10</span></h3>

                    <Button className="w-fit">
                        Shop Now
                    </Button>
                </div>
            </div>

            {/* <div className="flex items-center justify-center gap-4 bg-accent text-secondary py-4 px-10">
                <ul className="flex flex-row flex-wrap gap-4 md:gap-0">
                    <li className="text-sm text-secondary flex flex-col items-center justify-center">
                        <Ship className="w-5 h-5" />
                        <div className="ml-2 flex flex-col items-center justify-center">
                            <span className="ml-2">Free Shipping</span>
                            <span className="ml-2 text-xs text-secondary">(within the DAR ES SALAAM)</span>
                        </div>
                    </li>
                    <li className="text-sm text-secondary flex flex-col items-center justify-center">
                        <Ship className="w-5 h-5" />
                        <div className="ml-2 flex flex-col items-center justify-center">
                            <span className="ml-2">Free Shipping</span>
                            <span className="ml-2 text-xs text-secondary">(within the DAR ES SALAAM)</span>
                        </div>
                    </li>
                    <li className="text-sm text-secondary flex flex-col items-center justify-center">
                        <Ship className="w-5 h-5" />
                        <div className="ml-2 flex flex-col items-center justify-center">
                            <span className="ml-2">Free Shipping</span>
                            <span className="ml-2 text-xs text-secondary">(within the DAR ES SALAAM)</span>
                        </div>
                    </li>
                    <li className="text-sm text-secondary flex flex-col items-center justify-center">
                        <Ship className="w-5 h-5" />
                        <div className="ml-2 flex flex-col items-center justify-center">
                            <span className="ml-2">Free Shipping</span>
                            <span className="ml-2 text-xs text-secondary">(within the DAR ES SALAAM)</span>
                        </div>
                    </li>
                </ul>
            </div> */}
        </section>
    )
}

export default HeroSection