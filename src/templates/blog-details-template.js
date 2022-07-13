import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
// import PageBanner from '../components/Common/PageBanner'
import BlogSidebar from "../components/Blog/BlogSidebar"
import * as Icon from "react-feather"
import { Link } from "gatsby"

const BlogDetails = ({ data }) => {
  // console.log(data)
  const {
    title,
    longDescription,
    postDate,
    author,
    authorLink,
    image: {
      childImageSharp: {
        fluid: { src },
      },
    },
  } = data.blog
  return (
    <Layout>
      <SEO title={title} />

      <Navbar />

      <PageBanner pageTitle={title} />

      <div className="blog-details-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src={src} alt="Team Image" />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Icon.Clock /> {postDate}
                      </li>
                      <li>
                        <Icon.User /> <Link to={authorLink}>{author}</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="details-content">
                  <ReactMarkdown source={longDescription} />
                </div>
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

export const query = graphql`
  query GetSingleBlogDetails($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      title
      longDescription
      postDate
      author
      authorLink
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default BlogDetails
