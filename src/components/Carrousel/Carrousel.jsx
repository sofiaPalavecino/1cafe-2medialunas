import Slider from "react-slick"
import "../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../node_modules/slick-carousel/slick/slick-theme.scss";
import './Carrousel.scss'

export default function Carrousel({items}){

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        vertical: true,
        verticalSwiping: true,
    }

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {items}
            </Slider>
        </div>
    )
}