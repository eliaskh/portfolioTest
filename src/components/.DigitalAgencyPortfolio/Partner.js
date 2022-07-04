import React from 'react'; 

import APPartner1 from "../../assets/images/agency-portfolio-partner-image/ap-partner1.png";
import APPartner2 from "../../assets/images/agency-portfolio-partner-image/ap-partner2.png";
import APPartner3 from "../../assets/images/agency-portfolio-partner-image/ap-partner3.png";
import APPartner4 from "../../assets/images/agency-portfolio-partner-image/ap-partner4.png";
import APPartner5 from "../../assets/images/agency-portfolio-partner-image/ap-partner5.png";
import APPartner6 from "../../assets/images/agency-portfolio-partner-image/ap-partner6.png";

import Loadable from '@loadable/component';
const OwlCarousel = Loadable(() => import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    responsive: {
        0: {
            items: 2,
        },
        576: {
            items: 4,
        },
        768: {
            items: 4,
        },
        992: {
            items: 6,
        }
    }
};

const Partner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="agency-portfolio-partner-area ptb-80">
            <div className="container">
                {display ? <OwlCarousel 
                    className="agency-portfolio-partner-slides owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-agency-portfolio-partner">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={APPartner1} alt="image" />
                        </a>
                    </div>
                    <div className="single-agency-portfolio-partner">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={APPartner2} alt="image" />
                        </a>
                    </div>
                    <div className="single-agency-portfolio-partner">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={APPartner3} alt="image" />
                        </a>
                    </div>
                    <div className="single-agency-portfolio-partner">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={APPartner4} alt="image" />
                        </a>
                    </div>
                    <div className="single-agency-portfolio-partner">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={APPartner5} alt="image" />
                        </a>
                    </div>
                    <div className="single-agency-portfolio-partner">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={APPartner6} alt="image" />
                        </a>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Partner;  