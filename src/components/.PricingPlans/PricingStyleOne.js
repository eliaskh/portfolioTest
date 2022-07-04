import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

// Shape Images
import Shape1 from "../../assets/images/shape2.svg"
import Shape2 from "../../assets/images/shape2.svg"
import Shape3 from "../../assets/images/shape4.svg"
import Shape4 from "../../assets/images/shape4.svg"

const query = graphql`
  {
    strapiPricingStyleOne {
      title
      shortText
      pricingInfo {
        id
        title
        dollarSign
        price
        duration
        btnText
        btnLink
        features {
          id
          text
        }
      }
    }
  }
`

const PricingStyleOne = () => {
  const data = useStaticQuery(query)
  const { strapiPricingStyleOne } = data

  return (
    <div className="pricing-area pt-80 pb-50 bg-f9f6f6">
      <div className="container">
        <div className="section-title">
          <h2>{strapiPricingStyleOne.title}</h2>
          <div className="bar"></div>
          <p>{strapiPricingStyleOne.shortText}</p>
        </div>

        <div className="row justify-content-center">
          {strapiPricingStyleOne.pricingInfo.map(card => (
            <div className="col-lg-4 col-md-6" key={card.id}>
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>{card.title}</h3>
                </div>

                <div className="content">
                  <div className="price">
                    <span>
                      <sup>{card.dollarSign}</sup>
                      {card.price} <span>{card.duration}</span>
                    </span>
                  </div>

                  <div className="pricing-features">
                    <ul>
                      {card.features.map(list => (
                        <li className="active" key={list.id}>
                          {list.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pricing-footer">
                    <Link to={card.btnLink} className="btn btn-primary">
                      {card.btnText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape8 rotateme">
        <img src={Shape1} alt="shape" />
      </div>
      <div className="shape2 rotateme">
        <img src={Shape2} alt="shape" />
      </div>
      <div className="shape7">
        <img src={Shape3} alt="shape" />
      </div>
      <div className="shape4">
        <img src={Shape4} alt="shape" />
      </div>
    </div>
  )
}

export default PricingStyleOne
