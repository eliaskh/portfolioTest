import React from 'react'
import { Link } from "gatsby"

// Hosting Images
import HostingShape1 from "../../assets/images/hosting-banner-image/hosting-shape1.png";
import HostingShape2 from "../../assets/images/hosting-banner-image/hosting-shape2.png";
import HostingShape3 from "../../assets/images/hosting-banner-image/hosting-shape3.png";
import HostingShape4 from "../../assets/images/hosting-banner-image/hosting-shape4.png";
import HostingShape5 from "../../assets/images/hosting-banner-image/hosting-shape5.png";
import HostingShape6 from "../../assets/images/hosting-banner-image/hosting-shape6.png";
import HostingShape7 from "../../assets/images/hosting-banner-image/hosting-shape7.png";
import HostingShape8 from "../../assets/images/hosting-banner-image/hosting-shape8.png";
import HostingShape9 from "../../assets/images/hosting-banner-image/hosting-shape9.png";
import HostingStaticMain from "../../assets/images/hosting-banner-image/hosting-static-main.png";

// Shape Images
import Shape1 from "../../assets/images/shape1.png";
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg";
import Shape5 from "../../assets/images/shape5.png";


import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
{
    strapiBanner {
        mainText
        hostingFeatures {
            feature
            id
        }
        buttonLink
        priceText
    }
}
`

const MainBanner = () => {
    const data = useStaticQuery(query)
    // console.log(data)
    const { strapiBanner: {mainText, hostingFeatures, buttonLink, priceText} } = data
    return (
        <div className="hosting-main-banner">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="hosting-banner-content">
                                    <h1>{mainText}</h1>
                                    <ul>
                                        {hostingFeatures.map(ft => (
                                            <li key={ft.id}>{ft.feature}</li>
                                        ))}
                                    </ul>

                                    <p>{priceText}</p>

                                    <Link to={buttonLink} className="btn btn-primary">
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="col-lg-6 col-md-12">
                                <div className="hosting-banner-image">
                                    <img 
                                        src={HostingShape1} 
                                        className="animate__animated animate__fadeInDown animate__delay-0.7s"
                                        alt="image" 
                                    /> 

                                    <img 
                                        src={HostingShape2} 
                                        className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                        alt="image"
                                    />
                            
                                    <img 
                                        src={HostingShape3} 
                                        className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                        alt="image"
                                    />
                            
                                    <img 
                                        src={HostingShape4} 
                                        className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                        alt="image"
                                    />
                            
                                    <img 
                                        src={HostingShape5} 
                                        className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                        alt="image"
                                    />
                        
                                    <img 
                                        src={HostingShape6} 
                                        className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                        alt="image"
                                    />
                            
                                    <img 
                                        src={HostingShape7} 
                                        className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                        alt="image"
                                    />
                            
                                    <img 
                                        src={HostingShape8} 
                                        className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                        alt="image"
                                    />
                        
                                    <img 
                                        src={HostingShape9} 
                                        className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                        alt="image"
                                    />
                        
                                    <img 
                                        src={HostingStaticMain} 
                                        className="animate__animated animate__fadeInUp animate__delay-0.7s" 
                                        alt="image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Shape Images */}
            <div className="shape1"><img src={Shape1} alt="shape" /></div>
            <div className="shape2 rotateme"><img src={Shape2} alt="shape" /></div>
            <div className="shape3"><img src={Shape3} alt="shape" /></div>
            <div className="shape4"><img src={Shape4} alt="shape" /></div>
            <div className="shape5"><img src={Shape5} alt="shape" /></div>
            <div className="shape6 rotateme"><img src={Shape4} alt="shape" /></div>
            <div className="shape7"><img src={Shape4} alt="shape" /></div>
            <div className="shape8 rotateme"><img src={Shape2} alt="shape" /></div>
        </div>
    );
}

export default MainBanner;
