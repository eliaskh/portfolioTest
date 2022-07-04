import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner';
import ProductCard from '../components/Shop/ProductCard';

const Shop = () => (
    <Layout>
        <SEO title="Shop" /> 

        <Navbar />

        <PageBanner pageTitle="Products" /> 

        <ProductCard />

        <Footer />
    </Layout>
)

export default Shop;