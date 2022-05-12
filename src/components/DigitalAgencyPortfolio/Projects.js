import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { Link } from "gatsby";

import ProjectImg1 from "../../assets/images/agency-portfolio-projects/ap-project1.jpg";   
import ProjectImg2 from "../../assets/images/agency-portfolio-projects/ap-project2.jpg";   
import ProjectImg3 from "../../assets/images/agency-portfolio-projects/ap-project3.jpg";   
import ProjectImg4 from "../../assets/images/agency-portfolio-projects/ap-project4.jpg";   
import ProjectImg5 from "../../assets/images/agency-portfolio-projects/ap-project5.jpg";   
import ProjectImg6 from "../../assets/images/agency-portfolio-projects/ap-project6.jpg";   
import ProjectImg7 from "../../assets/images/agency-portfolio-projects/ap-project7.jpg";   
import ProjectImg8 from "../../assets/images/agency-portfolio-projects/ap-project8.jpg";   
import ProjectImg9 from "../../assets/images/agency-portfolio-projects/ap-project9.jpg";   
import ProjectImg10 from "../../assets/images/agency-portfolio-projects/ap-project10.jpg";   
import ProjectImg11 from "../../assets/images/agency-portfolio-projects/ap-project11.jpg";   

const masonryOptions = {
    transitionDuration: 0
};
 
export class Projects extends Component {
    render() {
        const images = this.props.images.map((image, idx) => {
            return (
                <div className="col-lg-4 col-sm-6 item" key={idx}>
                    <div className="single-latest-projects">
                        <img src={image.image} alt="portfolio-image" />

                        <div className="content">
                            <span>{image.category}</span>
                            <h3>{image.title}</h3>
                        </div>

                        <Link to="/project-details" className="link-btn"></Link>
                    </div>
                </div>
            )
        })
        return (
            <div className="our-latest-projects ptb-80">
                <div className="container">
                    <div className="section-title text-left">
                        <h2>Our Latest <span>Projects</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                 
                    <Masonry
                        className={'row'} // default ''
                        elementType={'div'} // default 'div'
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    >
                        {images}
                    </Masonry>
                </div>
            </div>
        );
    }
}

Projects.defaultProps = {
    images: [
        { 
            image: ProjectImg1,
            category: "Business",
            title: "Business Stratagy"
        },
        { 
            image: ProjectImg2, 
            category: "Development",
            title: "Web Development"
        },
        { 
            image: ProjectImg3, 
            category: "Marketing",
            title: "Digital Marketing"
        },
        { 
            image: ProjectImg4,
            category: "App",
            title: "Mobile App Development"
        },
        { 
            image: ProjectImg6,
            category: "Marketing",
            title: "Email Marketing"
        },
        { 
            image: ProjectImg5,
            category: "Development",
            title: "E-commerce Development"
        },
        { 
            image: ProjectImg9,
            category: "App",
            title: "React App Development"
        },
        { 
            image: ProjectImg8,
            category: "Writing",
            title: "Content Writing"
        },
        { 
            image: ProjectImg7,
            category: "IT",
            title: "IT Consultancy"
        },
        { 
            image: ProjectImg11,
            category: "Solutions",
            title: "IT Solutions"
        },
        { 
            image: ProjectImg10,
            category: "Marketing",
            title: "Marketing & Reporting"
        },
    ]
}

export default Projects;
