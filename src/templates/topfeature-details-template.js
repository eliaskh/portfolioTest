import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from '../components/Common/PageBanner'

const TopFeatureDetails = ({ data }) => {
    // console.log(data)
    const { headerText, longDescription } = data.topfeature
    return(
        <Layout>
            <SEO title={headerText} /> 

            <Navbar />

            <PageBanner pageTitle={headerText} />

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
    query GetSingleTopFeaturesDetails($slug: String) {
        topfeature: strapiTopFeatures(slug: { eq: $slug }) {
            headerText
            longDescription
        }
    }
`

export default TopFeatureDetails