import React from "react"
import * as Icon from "react-feather"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiCloudHostingServices {
      title
      shortText
      serviceList {
        id
        text
      }
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    strapiDevelopmentService {
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      title
      shortText
      serviceList {
        id
        text
      }
    }
  }
`

const ServicesArea = () => {
  const data = useStaticQuery(query)
  const { strapiCloudHostingServices, strapiDevelopmentService } = data

  return (
    <>
      <div className="services-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>{strapiCloudHostingServices.title}</h2>
                <div className="bar"></div>
                <p>{strapiCloudHostingServices.shortText}</p>
              </div>
              <div className="row"></div>
            </div>
            <div className="col-lg-6 col-md-12 services-right-image">
              <img
                src={strapiCloudHostingServices.image.childImageSharp.fluid.src}
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                alt="Service Image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="services-area ptb-80">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 services-left-image">
              <img
                src={strapiDevelopmentService.image.childImageSharp.fluid.src}
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                alt="Service Image"
              />
            </div>
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>{strapiDevelopmentService.title}</h2>
                <div className="bar"></div>
                <p>{strapiDevelopmentService.shortText}</p>
              </div>
              <div className="row">
                {strapiDevelopmentService.serviceList.map(list => (
                  <div className="col-lg-6 col-md-6" key={list.id}>
                    <div className="box">
                      <Icon.CheckCircle /> {list.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesArea
