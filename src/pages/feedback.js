import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner'; 
import FeedbackStyleTwo from '../components/Common/FeedbackStyleTwo';
import FeedbackStyleThree from '../components/Common/FeedbackStyleThree';
import FeedbackStyleFour from '../components/Common/FeedbackStyleFour';
import FeedbackStyleFive from '../components/Common/FeedbackStyleFive';

const FeedbackPage = () => (
    <Layout>
        <SEO title="Feedback" /> 

        <Navbar />

        <PageBanner pageTitle="Feedback or Testimonials" />
 
        <FeedbackStyleThree />

        <FeedbackStyleTwo />

        <FeedbackStyleFour />

        <FeedbackStyleFive />

        <Footer />
    </Layout>
)

export default FeedbackPage;