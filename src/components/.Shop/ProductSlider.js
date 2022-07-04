import React from 'react';

import ShopImage1 from "../../assets/images/shop-image/shop-image1.jpg";
import ShopImage2 from "../../assets/images/shop-image/shop-image2.jpg";
import ShopImage3 from "../../assets/images/shop-image/shop-image3.jpg";
import ShopImage4 from "../../assets/images/shop-image/shop-image4.jpg";
import ShopImage5 from "../../assets/images/shop-image/shop-image5.jpg"; 

import Loadable from '@loadable/component';
const OwlCarousel = Loadable(() => import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    items: 1,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
};

const ProductSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            {display ? <OwlCarousel 
                className="products-details-image products-details-image-slides owl-carousel owl-theme"
                {...options}
            >  
                <div className="single-image-box">
                    <img src={ShopImage1} alt="img" />
                </div>

                <div className="single-image-box">
                    <img src={ShopImage2} alt="img" />
                </div>
                
                <div className="single-image-box">
                    <img src={ShopImage3} alt="img" />
                </div>
                
                <div className="single-image-box">
                    <img src={ShopImage4} alt="img" />
                </div>
                
                <div className="single-image-box">
                    <img src={ShopImage5} alt="img" />
                </div>
            </OwlCarousel> : ''}
        </>
    )
}

export default ProductSlider;  