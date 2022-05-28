import React from "react"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import NavbarStyleFour from "../components/_App/NavbarStyleFour"
import MainBanner from "../components/BigdataAnalytics/MainBanner"
import MainBannerElias from "../components/Elias/MainBannerElias"
import MainBannerElias2 from "../components/Elias/MainBannerElias2"
import Servie1 from "../components/Elias/Service1"
import Servie2 from "../components/Elias/Servie2"
import ServiceLight from "../components/Elias/ServiceLight"
import ServiceLight2 from "../components/Elias/ServiceLight2"
import WhatWeDo from "../components/BigdataAnalytics/WhatWeDo"
import DiscoverArea from "../components/BigdataAnalytics/DiscoverArea"
import Services from "../components/DigitalAgency/OurServices"
import TeamStyleTwo from "../components/Common/TeamStyleTwo"
import BigdataFunFacts from "../components/BigdataAnalytics/BigdataFunFacts"
import Feedback from "../components/BigdataAnalytics/Feedback"
import IndustriesWeServe from "../components/BigdataAnalytics/IndustriesWeServe"
import BlogPost from "../components/BigdataAnalytics/BlogPost"
import NewsletterStyleTwo from "../components/Common/NewsletterStyleTwo"
import Footer from "../components/_App/Footer"
import image1 from "../assets/images/Elias/img2.jpg"
import image2 from "../assets/images/Elias/ux-ui1.jpg"
import image3 from "../assets/images/Elias/shop.jpg"

const BigdataAnalytics = () => (
  <Layout>
    <SEO title="Home" />
    {/* <NavbarStyleFour /> */}
    <MainBannerElias2 />
    <Servie2
      title1={"בניית אתרים"}
      title2={"בניית אתרים"}
      design={"first"}
      about={
        "לפתח יישומי אינטרנט מותאמים אישית, יעילים ככל האפשר למטרות העסקיות של הלקוח"
      }
      imageRow={image1}
      showTitle={true}
    />
    <ServiceLight2
      title1={"עיצוב חווית משתמש"}
      title2={"עיצוב חווית משתמש"}
      design={"no"}
      about={
        "בניית דגם אינטראקטיבי ועיצוב ממשק משתמש אטרקטיבי ויזואלי וידידותי למשתמש"
      }
      imageRow={image2}
    />
    <Servie2
      title1={"חנויות אונליין"}
      title2={"חנויות אונליין"}
      design={"first"}
      about={"עיצוב ובניית חנויות מקוונות באמצעות הפלטפורמות המובילות בשוק"}
      imageRow={image1}
      showTitle={false}
    />
    <ServiceLight2
      title1={"חנויות אונליין"}
      title2={"חנויות אונליין"}
      design={"first"}
      about={"עיצוב ובניית חנויות מקוונות באמצעות הפלטפורמות המובילות בשוק"}
      imageRow={image3}
    />
    {/* <WhatWeDo />
    <DiscoverArea /> */}
    {/* <Services /> */}
    {/* <TeamStyleTwo /> */}
    {/* <BigdataFunFacts /> */}
    {/* <Feedback /> */}
    {/* <IndustriesWeServe />
    <BlogPost /> */}
    {/* <NewsletterStyleTwo /> */}
    {/* <Footer /> */}
  </Layout>
)

export default BigdataAnalytics
