import React from "react"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import NavbarStyleSix from "../components/_App/NavbarStyleSix"
import MainBanner from "../components/DigitalAgencyPortfolio/MainBanner"
import Projects from "../components/DigitalAgencyPortfolio/Projects"
import AboutUsContent from "../components/DigitalAgencyPortfolio/AboutUsContent"
import FeedbackStyleFive from "../components/Common/FeedbackStyleFive"
import Partner from "../components/DigitalAgencyPortfolio/Partner"
import BlogPostStyleThree from "../components/Common/BlogPostStyleThree"
import CreativeArea from "../components/DigitalAgencyPortfolio/CreativeArea"
import Footer from "../components/_App/Footer"

const DigitalAgencyPortfolio = () => (
  <Layout>
    <SEO title="Digital Agency Portfolio Home" />
    <NavbarStyleSix />
    <MainBanner />
    <Projects />
    <AboutUsContent />
    <FeedbackStyleFive />
    <Partner />
    <BlogPostStyleThree />
    <CreativeArea />
    <Footer />
  </Layout>
)

export default DigitalAgencyPortfolio
