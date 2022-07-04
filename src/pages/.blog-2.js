import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner';
import * as Icon from 'react-feather';
import BlogSidebar from '../components/Blog/BlogSidebar';
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
{   
    strapiBlogHeader {
        title
        shortText
    }

    allStrapiBlogs {
        nodes {
            id
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            title
            postDate
            author
            authorLink
            shortText
            btnText
            longDescription
            slug
        }
    }
}
`

const Blog2 = () => {

    const data = useStaticQuery(query)
    const {
        strapiBlogHeader: {title, shortText},
        allStrapiBlogs: {nodes: blogs}
    } = data

    return (
        <Layout>
            <SEO title="Blog" /> 

            <Navbar />

            <PageBanner pageTitle="Blog Right Sidebar" />

            <div className="blog-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row justify-content-center">
                                {blogs.map(blog => (
                                    <div className="col-lg-6 col-md-6" key={blog.id}>
                                        <div className="single-blog-post">
                                            <div className="blog-image">
                                                <Link to={`/blogs/${blog.slug}`}>
                                                    <img 
                                                        src={blog.image.childImageSharp.fluid.src}
                                                        alt="image" 
                                                    />
                                                </Link>

                                                <div className="date">
                                                    <Icon.Calendar /> {blog.postDate}
                                                </div>
                                            </div>

                                            <div className="blog-post-content">
                                                <h3>
                                                    <Link to={`/blogs/${blog.slug}`}>
                                                        {blog.title}
                                                    </Link>
                                                </h3>

                                                <span>
                                                    By <Link to={blog.authorLink}>{blog.author}</Link>
                                                </span>

                                                <p>{blog.shortText}</p>

                                                <Link to={`/blogs/${blog.slug}`} className="read-more-btn">
                                                    {blog.btnText} <Icon.ArrowRight />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))} 
  
                                {/* Pagination */}
                                {/* <div className="col-lg-12 col-md-12">
                                    <div className="pagination-area">
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item">
                                                    <Link to="#" className="page-link">
                                                        Prev
                                                    </Link>
                                                </li>

                                                <li className="page-item active">
                                                    <Link to="#" className="page-link">1</Link>
                                                </li>

                                                <li className="page-item">
                                                    <Link to="#" className="page-link">2</Link>
                                                </li>

                                                <li className="page-item">
                                                    <Link to="#" className="page-link">3</Link>
                                                </li> 

                                                <li className="page-item">
                                                    <Link to="#" className="page-link">
                                                        Next
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </Layout>
    )
}

export default Blog2;