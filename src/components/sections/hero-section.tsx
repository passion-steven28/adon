import { Button } from "../ui/button"
import dell from '../../assets/dell-2.svg'
import hp from '../../assets/hp-5.svg'
import lenovo from '../../assets/lenovo-2.svg'
import microsoft from '../../assets/microsoft-windows-22.svg'
import asus from '../../assets/asus-logo.svg'
import apple from '../../assets/apple-14.svg'

const HeroSection = () => {
    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
                <div className="content-center justify-self-start md:col-span-7 md:text-start">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:max-w-2xl md:text-5xl xl:text-6xl">Limited Time Offer!<br />Up to 50% OFF!</h1>
                    <p className="mb-4 max-w-2xl text-gray-500 dark:text-gray-400 md:mb-12 md:text-lg lg:mb-5 lg:text-xl">Don't Wait - Limited Stock at Unbeatable Prices!</p>
                    <Button size={'lg'}>Shop Now</Button>
                </div>
                <div className="hidden md:col-span-5 md:mt-0 md:flex">
                    <img
                        className="rounded-lg"
                        src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg?t=st=1734955725~exp=1734959325~hmac=bd0cefc390f89f32477804d64c31f22ef563b44a7e346b5f84c9f22bacfb1765&w=826" alt="shopping illustration"
                    />
                </div>
            </div>
            <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 text-gray-500 dark:text-gray-400 sm:grid-cols-3 sm:gap-12 lg:grid-cols-6 px-4">
                <div className="flex justify-center">
                    <img
                        src={dell}
                        alt="dell logo"
                        className="h-8"
                    />
                </div>
                <div className="flex justify-center">
                    <img
                        src={hp}
                        alt="hp logo"
                        className="h-8"
                    />
                </div>
                <div className="flex justify-center">
                    <img
                        src={lenovo}
                        alt="lenovo logo"
                        className="h-8"
                    />
                </div>
                <div className="flex justify-center">
                    <img
                        src={microsoft}
                        alt="microsoft logo"
                        className="h-8"
                    />
                </div>
                <div className="flex justify-center">
                    <img
                        src={asus}
                        alt="asus logo"
                        className="h-8"
                    />
                </div>
                <div className="flex justify-center">
                    <img
                        src={apple}
                        alt="apple logo"
                        className="h-8"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection