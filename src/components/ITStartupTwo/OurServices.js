import React from 'react';
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

const OurServices = () => {

	const data = useStaticQuery(query)
    const {
		strapiOurServicesHeader: {title, shortText},
        allStrapiServices: {nodes: services}
    } = data

    return (
        <div className="services-area-two pt-80 pb-50 bg-f7fafd">
			<div className="container">
				<div className="section-title">
					<h2>{title}</h2>
					<div className="bar"></div>
					<p>{shortText}</p>
				</div>

				<div className="row justify-content-center">
					{services.slice(0,9).map(service => (
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
    )
}

export default OurServices;  