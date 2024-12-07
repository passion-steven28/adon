import BannerSection from '@/components/sections/banner-section'
import HeroSection from '@/components/sections/hero-section'
import ProductsSection from '@/components/sections/products-section'
import ServiceSection from '@/components/sections/service-section'

const Home = () => {
    return (
            <main className="grid grid-cols-12 gap-4 min-h-screen">
                <div className='col-start-1 col-end-13'>
                    <HeroSection />
                </div>
                <div className='col-start-3 col-end-11'>
                    <ServiceSection />
                </div>
                <div className='col-start-1 col-end-13'>
                    <BannerSection />
                </div>
                <div className='col-start-3 col-end-11'>
                    <ProductsSection />
                </div>
            </main>
    )
}

export default Home