import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

const MainBannerElias = () => {
  return (
    <div className="bigdata-analytics-banner">
      <div className="container">
        <div className="bigdata-analytics-content">
          <h1>שירותי פיתוח ועיצוב תוכנה</h1>
          <p>הדרך הבטוחה מרעיון למוצר מוגמר ברשת</p>

          <Link to="/contact" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>

      <div className="banner-boxes-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon">
                  <Icon.Server />
                </div>
                <h3>Analyze Your Data</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon">
                  <Icon.Code />
                </div>
                <h3>Customized Plan</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon">
                  <Icon.Users />
                </div>
                <h3>Implement Solution</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBannerElias
