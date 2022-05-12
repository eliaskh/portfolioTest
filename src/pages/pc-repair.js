import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import MainBanner from '../components/PCRepair/MainBanner';
import PartnerStyleTwo from '../components/Common/PartnerStyleTwo';
import AboutUsContent from '../components/PCRepair/AboutUsContent';
import Services from '../components/PCRepair/Services';
import CTA from '../components/PCRepair/CTA';
import FunFactsArea from '../components/Common/FunFactsArea';
import Team from '../components/PCRepair/Team';
import Feedback from '../components/Common/Feedback';
import WhyChoose from '../components/PCRepair/WhyChoose';
import BlogPost from '../components/Common/BlogPost';
import Footer from "../components/_App/Footer";

const PCRepair = () => (
    <Layout>
        <SEO title="PC Repair Home" /> 
        <Navbar />
        <MainBanner />
        <PartnerStyleTwo />
        <AboutUsContent />
        <Services />
        <CTA />
        <FunFactsArea />
        <Team />
        <Feedback />
        <WhyChoose />
        <BlogPost />
        <Footer />
    </Layout>
)

export default PCRepair;
