import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner'; 
import ProjectStyle1 from "../components/Projects/ProjectStyle1";

const Projects1 = () => (
    <Layout>
        <SEO title="Projects" /> 

        <Navbar />

        <PageBanner pageTitle="Projects Style One" />

        <ProjectStyle1 />

        <Footer />
    </Layout>
)

export default Projects1;