import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';
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

const BlogPost = () => {

    const data = useStaticQuery(query)
    const {
        strapiBlogHeader: {title, shortText},
        allStrapiBlogs: {nodes: blogs}
    } = data

    return (
        <div className="blog-area pt-80 pb-50">
            <div className="container">
                <div className="section-title">
                    <h2>{title}</h2>
                    <div className="bar"></div>
                    <p>{shortText}</p>
                </div>

                <div className="row justify-content-center">
                    {blogs.slice(0,3).map(blog => (
                        <div className="col-lg-4 col-md-6" key={blog.id}>
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
                </div>
            </div>
        </div>
    )
}

export default BlogPost;  