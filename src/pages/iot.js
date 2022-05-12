import React from 'react';
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import MainBanner from '../components/IOT/MainBanner';
import PartnerStyleTwo from '../components/Common/PartnerStyleTwo';
import OurServices from '../components/IOT/OurServices';
import Cta from '../components/IOT/Cta';
import FunFactsArea from '../components/Common/FunFactsArea';
import Features from '../components/IOT/Features';
import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import FeedbackStyleTwo from '../components/Common/FeedbackStyleTwo';
import WhyWeAreBest from '../components/IOT/WhyWeAreBest';
import BlogPost from '../components/Common/BlogPost';
import Footer from "../components/_App/Footer"; 

const IOT = () => (
    <Layout>
        <SEO title="IOT Home" />
        <Navbar />
        <MainBanner />
        <PartnerStyleTwo />
        <OurServices />
        <Cta />
        <FunFactsArea />
        <Features />
        <TeamStyleTwo />
        <FeedbackStyleTwo />
        <WhyWeAreBest />
        <BlogPost />
        <Footer />
    </Layout>
)

export default IOT;
