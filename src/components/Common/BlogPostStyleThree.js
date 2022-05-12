import React from 'react';
import { Link } from "gatsby";

import BlogImg1 from '../../assets/images/blog-image/blog1.jpg'
import BlogImg2 from '../../assets/images/blog-image/blog2.jpg'
import BlogImg3 from '../../assets/images/blog-image/blog3.jpg'

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    margin: 30,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
};

const BlogPostStyleThree = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="blog-area ptb-80">
			<div className="container">
				<div className="section-title text-left">
					<h2>Our Recent <span>News</span></h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>

                {display ? <OwlCarousel 
                    className="blog-slides owl-carousel owl-theme"
                    {...options}
                >   
                    <div className="single-blog-item">
                        <div className="post-image">
                            <Link to="/blog-details">
                                <img src={BlogImg1} alt="image" />
                            </Link>
                        </div>

                        <div className="post-content">
                            <ul className="post-meta">
                                <li>By <Link to="/author">Admin</Link></li>
                                <li>20 February 2020</li>
                            </ul>
                            <h3>
                                <Link to="/blog-details">
                                    The security risks of changing package owners
                                </Link>
                            </h3>
                        </div>
                    </div>

                    <div className="single-blog-item">
                        <div className="post-image">
                            <Link to="/blog-details">
                                <img src={BlogImg2} alt="image" />
                            </Link>
                        </div>

                        <div className="post-content">
                            <ul className="post-meta">
                                <li>By <Link to="/author">Admin</Link></li>
                                <li>21 February 2020</li>
                            </ul>
                            <h3>
                                <Link to="/blog-details">
                                    Tips to Protecting Your Business and Family
                                </Link>
                            </h3>
                        </div>
                    </div>

                    <div className="single-blog-item">
                        <div className="post-image">
                            <Link to="/blog-details">
                                <img src={BlogImg3} alt="image" />
                            </Link>
                        </div>

                        <div className="post-content">
                            <ul className="post-meta">
                                <li>By <Link to="/author">Admin</Link></li>
                                <li>22 February 2020</li>
                            </ul>
                            <h3>
                                <Link to="/blog-details">
                                    Protect Your Workplace from Cyber Attacks
                                </Link>
                            </h3>
                        </div>
                    </div>

                    <div className="single-blog-item">
                        <div className="post-image">
                            <Link to="/blog-details">
                                <img src={BlogImg3} alt="image" />
                            </Link>
                        </div>

                        <div className="post-content">
                            <ul className="post-meta">
                                <li>By <Link to="/author">Admin</Link></li>
                                <li>22 February 2020</li>
                            </ul>
                            <h3>
                                <Link to="/blog-details">
                                    Four New WordPress.com Color Schemes
                                </Link>
                            </h3>
                        </div>
                    </div>
                </OwlCarousel> : ''}
			</div>
		</div>
    )
}

export default BlogPostStyleThree;  