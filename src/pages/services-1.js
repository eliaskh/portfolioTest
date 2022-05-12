import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner';
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
{   
	strapiOurServicesHeader {
		title
		shortText
	}
    allStrapiServices {
		nodes {
			icon
			title
			shortText
			slug
			longDescription
			id
		}
	}
}
`

const Services1 = () => {

    const data = useStaticQuery(query)
    const {
		strapiOurServicesHeader: {title, shortText},
        allStrapiServices: {nodes: services}
    } = data

    return (
        <Layout>
            <SEO title="Services 1" /> 

            <Navbar />

            <PageBanner pageTitle="Services Style One" />

            <div className="services-area-two pt-80 pb-50 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>{title}</h2>
                        <div className="bar"></div>
                        <p>{shortText}</p>
                    </div>

                    <div className="row justify-content-center">
                        {services.map(service => (
                            <div className="col-lg-4 col-md-6" key={service.id}>
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h3>
                                        <Link to={`/services/${service.slug}`}>
                                            {service.title}
                                        </Link>
                                    </h3>
                                    <p>{service.shortText}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <Footer />
        </Layout>
    )
}

export default Services1;
