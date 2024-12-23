import banner from '../../assets/img/banner.jpg'


const BannerSection = () => {
    return (
        <div className="w-full h-[40vh]">
            <img
                src={banner}
                alt="banner image"
                className="w-full h-full object-cover relative"
            />
        </div>
    )
}

export default BannerSection