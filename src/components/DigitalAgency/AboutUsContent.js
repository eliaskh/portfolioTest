import React from 'react';
import { Link } from "gatsby";

import AgencyAboutImg from "../../assets/images/agency-image/agency-about-img.jpg";

// Shape Images 
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg"; 
import Shape5 from "../../assets/images/agency-image/agency-shape2.png"; 

const AboutUsContent = () => {
    return (
        <div className="agency-about-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="agency-about-img">
                            <img src={AgencyAboutImg} alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="agency-about-content">
                            <span className="sub-title">About Us</span>
                            <h2>Engaging New Audiences Through Smart Approach</h2>
                            <div className="bar"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.Donec vitae sapien ut libero venenatis faucibus tempus.</p>

                            <Link to="/about" className="btn btn-secondary">
                                Discover More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape3">
                <img src={Shape3} alt="shape" />
            </div>
            <div className="shape6 rotateme">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape7">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape10">
                <img src={Shape5} alt="image" />
            </div>
        </div>
    );
}

export default AboutUsContent;