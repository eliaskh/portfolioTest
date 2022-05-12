import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

// Service Images
import AgencyIconBG from "../assets/images/agency-image/agency-icon-bg.png"; 

// Shape Images 
import Shape2 from "../assets/images/shape2.svg";
import Shape3 from "../assets/images/shape3.svg";
import Shape4 from "../assets/images/shape4.svg";

const Services4 = () => (
    <Layout>

        <SEO title="Services 4" /> 

        <Navbar />

        <PageBanner pageTitle="Services Style Four" />

        <div className="solutions-area ptb-80">
            <div className="container justify-content-center">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-landscape"></i>
                                <img src={AgencyIconBG} alt="image" />
                            </div>

                            <h3>
                                <Link to="/service-details">
                                    Programmatic Advertising
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>

                            <Link to="/service-details" className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-bar-chart-alt"></i>
                                <img src={AgencyIconBG} alt="image" />
                            </div> 
                            <h3>
                                <Link to="/service-details">
                                    Strategy & Research
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            
                            <Link to="/service-details" className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-devices"></i>
                                <img src={AgencyIconBG} alt="image" />
                            </div> 
                            <h3>
                                <Link to="/service-details">
                                    Design & Development
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            
                            <Link to="/service-details" className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-chalkboard"></i>
                                <img src={AgencyIconBG} alt="image" />
                            </div> 
                            <h3>
                                <Link to="/service-details">
                                    Branding & Marketing
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            
                            <Link to="/service-details" className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-landscape"></i>
                                <img src={AgencyIconBG} alt="image" />
                            </div> 
                            <h3>
                                <Link to="/service-details">
                                    Programmatic Advertising
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            
                            <Link to="/service-details" className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-bar-chart-alt"></i>
                                <img src={AgencyIconBG} alt="image" />
                            </div> 
                            <h3>
                                <Link to="/service-details">
                                    Strategy & Research
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            
                            <Link to="/service-details" className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-devices"></i>
                                <img src={AgencyIconBG} alt="image" />
                            </div> 
                            <h3>
                                <Link to="/service-details">
                                    Design & Development
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            
                            <Link to="/service-details" className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-chalkboard"></i>
                                <img src={AgencyIconBG} alt="image" />
                            </div> 
                            <h3>
                                <Link to="/service-details">
                                    Branding & Marketing
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            
                            <Link to="/service-details" className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
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
            <div className="shape4">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape6 rotateme">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
        </div>
            
        <Footer />
    </Layout>
)

export default Services4;