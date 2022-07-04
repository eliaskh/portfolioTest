import React from 'react';
import { Link } from "gatsby";


// ML Banner Images
import One from "../../assets/images/ml-banner-image/one.png";
import Two from "../../assets/images/ml-banner-image/two.png";
import Three from "../../assets/images/ml-banner-image/three.png";
import Four from "../../assets/images/ml-banner-image/four.png";
import Five from "../../assets/images/ml-banner-image/five.png";
import Six from "../../assets/images/ml-banner-image/six.png";
import Seven from "../../assets/images/ml-banner-image/seven.png";
import Eight from "../../assets/images/ml-banner-image/eight.png";
import Nine from "../../assets/images/ml-banner-image/nine.png";
import Ten from "../../assets/images/ml-banner-image/ten.png";
import Eleven from "../../assets/images/ml-banner-image/eleven.png";
import MLMainPic from "../../assets/images/ml-banner-image/ml-main-pic.png"; 

// Shape Images
import Shape1 from "../../assets/images/shape1.png";
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg";

const MainBanner = () => {
    return (
        <div className="ml-main-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="ml-banner-content">
                            <h1>World’s Leading AI & Machine Learning Company</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                            <Link to="/contact" className="btn btn-secondary">
                                Get Started
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="ml-banner-image">
                            <img 
                                src={One} 
                                className="animate__animated animate__fadeIn animate__delay-2s" 
                                alt="image" 
                            />
                        
                            <img 
                                src={Two} 
                                className="animate__animated animate__fadeInUp animate__delay-1s" 
                                alt="image" 
                            />
                    
                            <img 
                                src={Three} 
                                className="animate__animated animate__fadeInUp animate__delay-0.5s" 
                                alt="image" 
                            />
                    
                            <img 
                                src={Four} 
                                className="animate__animated animate__fadeInUp animate__delay-2s" 
                                alt="image" 
                            />
                        
                            <img 
                                src={Five} 
                                className="animate__animated animate__fadeInDown animate__delay-2.5s" 
                                alt="image" 
                            />
                
                            <img 
                                src={Six} 
                                className="animate__animated animate__fadeInDown animate__delay-1.9s" 
                                alt="image" 
                            />
                        
                            <img 
                                src={Seven} 
                                className="animate__animated animate__fadeInDown animate__delay-2.1s" 
                                alt="image" 
                            />
                        
                            <img 
                                src={Eight} 
                                className="animate__animated animate__fadeInDown animate__delay-1.9s" 
                                alt="image" 
                            />
                        
                            <img 
                                src={Nine} 
                                className="animate__animated animate__fadeInDown animate__delay-1.7s" 
                                alt="image" 
                            />
                    
                            <img 
                                src={Ten} 
                                className="animate__animated animate__fadeInDown animate__delay-1.5s" 
                                alt="image" 
                            />
                    
                            <img 
                                src={Eleven} 
                                className="animate__animated animate__fadeInUp animate__delay-0.4s" 
                                alt="image" 
                            />
                    
                            <img 
                                src={MLMainPic} 
                                className="animate__animated animate__fadeInUp animate__delay-0.5s" 
                                alt="image" 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src={Shape1} alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape3">
                <img src={Shape3} alt="shape" />
            </div>
            <div className="shape4">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape7">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
        </div>
    );
}

export default MainBanner;