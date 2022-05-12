import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from '../components/Common/PageBanner'

const ServiceDetails = ({ data }) => {
    // console.log(data)
    const { 
        title, 
        longDescription, 
    } = data.service
    return(
        <Layout>
            <SEO title={title} /> 

            <Navbar />

            <PageBanner pageTitle={title} />

            <div className="ptb-80">
                <div className="container">
                    <div className="details-content">
                        <ReactMarkdown source={longDescription} />
                    </div>
                </div>
            </div>
 
            <Footer />
        </Layout>
    )
}

export const query = graphql`
    query GetSingleServiceDetails($slug: String) {
        service: strapiServices(slug: { eq: $slug }) {
            title 
            longDescription 
        }
    }
`

export default ServiceDetails