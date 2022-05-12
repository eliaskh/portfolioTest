import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import NavbarStyleTwo from "../components/_App/NavbarStyleTwo";
import MainBanner from "../components/Hosting/MainBanner";
import TopFeatures from '../components/Hosting/TopFeatures';
import DomainSearch from '../components/Hosting/DomainSearch';
import WhyChoose from '../components/Hosting/WhyChoose';
import PricingStyleTwo from '../components/PricingPlans/PricingStyleTwo';
import FeedbackStyleTwo from '../components/Common/FeedbackStyleTwo';
import Partner from "../components/Common/Partner";
import Features from '../components/Hosting/Features';
import BlogPost from "../components/Common/BlogPost";
import CTA from '../components/Common/CTA';
import Footer from "../components/_App/Footer";

const Hosting = () => (
    <Layout>
        <SEO title="Hosting Home" /> 
        <NavbarStyleTwo />
        <MainBanner />
        <TopFeatures />
        <DomainSearch />
        <WhyChoose />
        <PricingStyleTwo />
        <FeedbackStyleTwo />
        <div className="pb-80">
            <Partner />
        </div>
        <Features />
        <BlogPost />
        <CTA />
        <Footer />
    </Layout>
)

export default Hosting;
