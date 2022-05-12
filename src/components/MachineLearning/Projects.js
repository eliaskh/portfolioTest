import React from 'react';
import { Link } from "gatsby";

import ProjectsImg1 from "../../assets/images/projects-img1.jpg";
import ProjectsImg2 from "../../assets/images/projects-img2.jpg";
import ProjectsImg3 from "../../assets/images/projects-img3.jpg";
import ProjectsImg4 from "../../assets/images/projects-img4.jpg";
import ProjectsImg5 from "../../assets/images/projects-img5.jpg";

// Shape Images
import Shape1 from "../../assets/images/shape1.png";
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg";

import Loadable from '@loadable/component';
const OwlCarousel = Loadable(() => import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    autoplayTimeout: 5000,
    responsive: {
        0:{
            items: 1,
        },
        576:{
            items: 2,
        },
        768:{
            items: 2,
        },
        1024:{
            items: 3,
        },
        1200:{
            items: 4,
        }
    },
}

const Projects = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    
    return (
        <div className="ml-projects-area pt-0 ptb-80">
            <div className="container">
                <div className="section-title st-fs-28">
                    <h2>Proud Projects That Make Us Stand Out</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div className="container-fluid">
                {display ? <OwlCarousel 
                    className="ml-projects-slides owl-carousel owl-theme"
                    {...options}
                >  
                    <div className="single-ml-projects-box">
                        <img src={ProjectsImg1} alt="image" />
                        <div className="plus-icon">
                            <Link to="/project-details">
                                <span></span>
                            </Link>
                        </div>
                    </div>

                    <div className="single-ml-projects-box">
                        <img src={ProjectsImg2} alt="image" />
                        <div className="plus-icon">
                            <Link to="/project-details">
                                <span></span>
                            </Link>
                        </div>
                    </div>

                    <div className="single-ml-projects-box">
                        <img src={ProjectsImg3} alt="image" />
                        <div className="plus-icon">
                            <Link to="/project-details">
                                <span></span>
                            </Link>
                        </div>
                    </div>

                    <div className="single-ml-projects-box">
                        <img src={ProjectsImg4} alt="image" />
                        <div className="plus-icon">
                            <Link to="/project-details">
                                <span></span>
                            </Link>
                        </div>
                    </div>

                    <div className="single-ml-projects-box">
                        <img src={ProjectsImg5} alt="image" />
                        <div className="plus-icon">
                            <Link to="/project-details">
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </OwlCarousel> : ''}
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

export default Projects;