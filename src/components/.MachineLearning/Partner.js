import React from 'react';

import PartnerImg1 from '../../assets/images/partner-img/partner-1.png'
import PartnerHoverImg1 from '../../assets/images/partner-img/partner-hover1.png'
import PartnerImg2 from '../../assets/images/partner-img/partner-2.png'
import PartnerHoverImg2 from '../../assets/images/partner-img/partner-hover2.png'
import PartnerImg3 from '../../assets/images/partner-img/partner-3.png'
import PartnerHoverImg3 from '../../assets/images/partner-img/partner-hover3.png'
import PartnerImg4 from '../../assets/images/partner-img/partner-10.png'
import PartnerHoverImg4 from '../../assets/images/partner-img/partner-hover10.png'
import PartnerImg5 from '../../assets/images/partner-img/partner-5.png'
import PartnerHoverImg5 from '../../assets/images/partner-img/partner-hover5.png'
import PartnerImg6 from '../../assets/images/partner-img/partner-6.png'
import PartnerHoverImg6 from '../../assets/images/partner-img/partner-hover6.png'
import PartnerImg7 from '../../assets/images/partner-img/partner-7.png'
import PartnerHoverImg7 from '../../assets/images/partner-img/partner-hover7.png'

import Loadable from '@loadable/component';
const OwlCarousel = Loadable(() => import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    responsive: {
        0:{
            items:2,
        },
        576:{
            items:4,
        },
        768:{
            items:4,
        },
        1024:{
            items:5,
        },
        1200:{
            items:6,
        }
    }
}

const Partner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="ml-partner-area mt-minus-top ptb-80 pb-0">
            <div className="container">
                {display ? <OwlCarousel 
                    className="partner-slides owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-ml-partner">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={PartnerImg1} alt="image" />
                            <img src={PartnerHoverImg1} alt="image" />
                        </a>
                    </div>
                
                    <div className="single-ml-partner">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={PartnerImg2} alt="image" />
                            <img src={PartnerHoverImg2} alt="image" />
                        </a>
                    </div>
                
                    <div className="single-ml-partner">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={PartnerImg3} alt="image" />
                            <img src={PartnerHoverImg3} alt="image" />
                        </a>
                    </div>
            
                    <div className="single-ml-partner">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={PartnerImg4} alt="image" />
                            <img src={PartnerHoverImg4} alt="image" />
                        </a>
                    </div>
        
                    <div className="single-ml-partner">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={PartnerImg5} alt="image" />
                            <img src={PartnerHoverImg5} alt="image" />
                        </a>
                    </div>
            
                    <div className="single-ml-partner">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={PartnerImg6} alt="image" />
                            <img src={PartnerHoverImg6} alt="image" />
                        </a>
                    </div>
                
                    <div className="single-ml-partner">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={PartnerImg7} alt="image" />
                            <img src={PartnerHoverImg7} alt="image" />
                        </a>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    );
}

export default Partner;