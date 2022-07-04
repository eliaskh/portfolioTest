import React from 'react'; 
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
    {
		strapiItTopFeatures {
			featuresCard {
				id
				icon
				title
				shortText
			}
		}
    }
`

const Features = () => {

	const data = useStaticQuery(query)
    const {
        strapiItTopFeatures
    } = data

    return (
        <div className="boxes-area">
			<div className="container">
				<div className="row justify-content-center">
					{strapiItTopFeatures.featuresCard.map(feature => (
						<div className="col-lg-3 col-sm-6" key={feature.id}>
							<div className="single-box">
								<div className="icon">
									<i className={feature.icon}></i>
								</div>
								<h3>{feature.title}</h3>
								<p>{feature.shortText}</p>
							</div>
						</div>
   					))}
				</div>
			</div>
		</div>
    )
}

export default Features;
