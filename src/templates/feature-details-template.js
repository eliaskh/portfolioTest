import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from '../components/Common/PageBanner'

const FeatureDetails = ({ data }) => {
    // console.log(data)
    const { title, longDescription } = data.feature
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
    query GetSingleFeatureDetails($slug: String) {
        feature: strapiOurFeatures(slug: { eq: $slug }) {
            title
            longDescription
        }
    }
`

export default FeatureDetails