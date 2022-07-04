import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner'; 
import ProjectStyle2 from './../components/Projects/ProjectStyle2';

const Projects2 = () => (
    <Layout>
        <SEO title="Projects" /> 

        <Navbar />

        <PageBanner pageTitle="Projects Style Two" />

        <ProjectStyle2 />

        <Footer />
    </Layout>
)

export default Projects2;