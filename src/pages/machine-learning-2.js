import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import NavbarStyleThree from "../components/_App/NavbarStyleThree";
import MainBanner from '../components/MachineLearningTwo/MainBanner';
import Partner from '../components/MachineLearningTwo/Partner';
import WhatWeOffer from '../components/MachineLearningTwo/WhatWeOffer';
import AboutUsContent from '../components/MachineLearningTwo/AboutUsContent';
import OurServices from '../components/MachineLearningTwo/OurServices';
import FunFactsArea from '../components/Common/FunFactsArea';
import Projects from '../components/MachineLearningTwo/Projects';
import PricingStyleFour from '../components/PricingPlans/PricingStyleFour';
import FeedbackStyleFour from '../components/Common/FeedbackStyleFour';
import BlogCard from '../components/MachineLearningTwo/BlogCard';
import Newsletter from '../components/Common/Newsletter';
import Footer from "../components/_App/Footer";

const MachineLearning2 = () => (
    <Layout>
        <SEO title="Machine Learning 2 Home" /> 
        <NavbarStyleThree />
        <MainBanner />
        <Partner />
        <WhatWeOffer />
        <AboutUsContent />
        <OurServices />
        <FunFactsArea />
        <Projects />
        <PricingStyleFour /> 
        <FeedbackStyleFour />
        <BlogCard />
        <Newsletter />
        <Footer />
    </Layout>
)

export default MachineLearning2;
