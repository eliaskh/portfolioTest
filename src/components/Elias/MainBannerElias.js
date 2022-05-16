import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

const MainBannerElias = () => {
  return (
    <div className="bigdata-analytics-banner">
      <div className="container">
        <div className="bigdata-analytics-content">
          <h1>שירותי פיתוח ועיצוב תוכנה</h1>
          <h3 style={{ color: "white" }}>
            הדרך הבטוחה מרעיון למוצר מוגמר ברשת
          </h3>

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
                <h3>עיצוב גרפי</h3>
                <p>
                  יצירת כל מיני עיצובים גרפים, כמו פליירים,לוגו, כרטיסי ביקור,
                  ברושור, חוברת, קטלוג ועוד
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon">
                  <Icon.Code />
                </div>
                <h3>בניית אתרים</h3>
                <p>
                  לפתח יישומי אינטרנט מותאמים אישית, יעילים ככל האפשר למטרות
                  העסקיות של הלקוח
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon">
                  <Icon.Users />
                </div>
                <h3>עיצוב חווית משתמש</h3>
                <p>
                  בניית דגם אינטראקטיבי ועיצוב ממשק משתמש אטרקטיבי ויזואלי
                  וידידותי למשתמש
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon">
                  <Icon.Users />
                </div>
                <h3>אנליזה וקידום אתרים</h3>
                <p>
                  ניתוח מדויק של תנועת הגולשים באתר, היכרות עם התנהגותם באמצעות
                  הכלים האנליטיים המתקדמים ביותר.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon">
                  <Icon.Users />
                </div>
                <h3> חנויות אונליין</h3>
                <p>
                  עיצוב ובניית חנויות מקוונות באמצעות הפלטפורמות המובילות בשוק
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-banner-boxes">
                <div className="icon">
                  <Icon.Users />
                </div>
                <h3>פיתוח אפליקציות מובייל</h3>
                <p>
                  לפתח אפליקציות מובייל המבוססות על דרישות הלקוח, מטרותיו
                  ותקציבו
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
