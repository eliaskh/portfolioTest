import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/ITStartupTwo/MainBanner";
import Features from "../components/ITStartupTwo/Features";
import ServicesArea from "../components/ITStartupTwo/ServicesArea";
import OurServices from "../components/ITStartupTwo/OurServices";
import Team from "../components/Common/Team";
import FunFactsArea from "../components/Common/FunFactsArea";
import PricingStyleOne from "../components/PricingPlans/PricingStyleOne";
import FeedbackStyleTwo from "../components/Common/FeedbackStyleTwo";
import Partner from "../components/Common/Partner";
import BlogPost from "../components/Common/BlogPost";
import Footer from "../components/_App/Footer";

const ITStartup2 = () => (
    <Layout>
        <SEO title="IT Startp Demo 2" />
        <Navbar />
        <MainBanner />
        <Features />
        <ServicesArea />
        <OurServices />
        <Team />
        <FunFactsArea />
        <PricingStyleOne />
        <FeedbackStyleTwo />
        <Partner />
        <BlogPost />
        <Footer />
    </Layout>
)

export default ITStartup2;
