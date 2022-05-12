import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner';
import OurFeatures from '../components/Features/OurFeatures';
import SingleFeatures from '../components/Features/SingleFeatures';

const Features = () => (
    <Layout>
        <SEO title="Features Page" /> 
        
        <Navbar />

        <PageBanner pageTitle="Features" />

        <OurFeatures />

        <SingleFeatures />

        <Footer />
    </Layout>
)

export default Features;
