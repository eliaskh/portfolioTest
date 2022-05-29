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
import image1 from "../assets/images/Elias/im1.jpg"
import image2 from "../assets/images/Elias/im2.jpg"
import image3 from "../assets/images/Elias/im3.jpg"
import image4 from "../assets/images/Elias/im4.jpg"
import image5 from "../assets/images/Elias/im5.jpg"
import image6 from "../assets/images/Elias/im6.jpg"
const BigdataAnalytics = () => (
  <Layout>
    <SEO title="Home" />
    {/* <NavbarStyleFour /> */}
    <MainBannerElias2 />
    <Servie2
      title1={"בניית אתרים"}
      title2={"בניית אתרים"}
      design={"no"}
      about={
        "לפתח יישומי אינטרנט מותאמים אישית, יעילים ככל האפשר למטרות העסקיות של הלקוח"
      }
      imageRow={image1}
      showTitle={true}
      number={"1"}
      description="בניית אתרים מקצועית נעשה בכמה שלבים ובעזרת כמה בעלי מקצוע.
                    מרגע קבלת הרעיון מהלקוח, מחקר השוק , מי הם הלקוחות
                    הפוטנציאליים, תכנון, עיצוב ופיתוח. פיתוח מוצר דיגיטלי מצליח
                    הוא תהליך מורכב הדורש בחירה של הטכנולוגיה מתאימה, יישום
                    פתרונות חדשניים ומעקב אחר תהליכים. המפגש הראשון הוא עם מנהל
                    הפרויקטים שלנו שינסה לחקור ולהבין את סוג האתר, מטרתו וקהל
                    היעד. השלב של האיפיון הוא אבן היסוד של פיתוח האתר."
    />
    <ServiceLight2
      title1={"עיצוב חווית משתמש"}
      title2={"עיצוב חווית משתמש"}
      design={"no"}
      about={
        "בניית דגם אינטראקטיבי ועיצוב ממשק משתמש אטרקטיבי ויזואלי וידידותי למשתמש"
      }
      imageRow={image3}
      number="2"
      description="בניית אתרים מקצועית נעשה בכמה שלבים ובעזרת כמה בעלי מקצוע.
                    מרגע קבלת הרעיון מהלקוח, מחקר השוק , מי הם הלקוחות
                    הפוטנציאליים, תכנון, עיצוב ופיתוח. פיתוח מוצר דיגיטלי מצליח
                    הוא תהליך מורכב הדורש בחירה של הטכנולוגיה מתאימה, יישום
                    פתרונות חדשניים ומעקב אחר תהליכים. המפגש הראשון הוא עם מנהל
                    הפרויקטים שלנו שינסה לחקור ולהבין את סוג האתר, מטרתו וקהל
                    היעד. השלב של האיפיון הוא אבן היסוד של פיתוח האתר."
    />
    <Servie2
      title1={"חנויות אונליין"}
      title2={"חנויות אונליין"}
      design={"first"}
      about={"עיצוב ובניית חנויות מקוונות באמצעות הפלטפורמות המובילות בשוק"}
      imageRow={image2}
      showTitle={false}
      number={"3"}
      description="בניית אתרים מקצועית נעשה בכמה שלבים ובעזרת כמה בעלי מקצוע.
                    מרגע קבלת הרעיון מהלקוח, מחקר השוק , מי הם הלקוחות
                    הפוטנציאליים, תכנון, עיצוב ופיתוח. פיתוח מוצר דיגיטלי מצליח
                    הוא תהליך מורכב הדורש בחירה של הטכנולוגיה מתאימה, יישום
                    פתרונות חדשניים ומעקב אחר תהליכים. המפגש הראשון הוא עם מנהל
                    הפרויקטים שלנו שינסה לחקור ולהבין את סוג האתר, מטרתו וקהל
                    היעד. השלב של האיפיון הוא אבן היסוד של פיתוח האתר."
    />
    <ServiceLight2
      title1={"עיצוב גרפי"}
      title2={"עיצוב גרפי"}
      design={"no"}
      about={
        "יצירת כל מיני עיצובים גרפים, כמו פליירים,לוגו, כרטיסי ביקור, ברושור, חוברת, קטלוג ועוד"
      }
      imageRow={image4}
      number={"4"}
      description="בניית אתרים מקצועית נעשה בכמה שלבים ובעזרת כמה בעלי מקצוע.
                    מרגע קבלת הרעיון מהלקוח, מחקר השוק , מי הם הלקוחות
                    הפוטנציאליים, תכנון, עיצוב ופיתוח. פיתוח מוצר דיגיטלי מצליח
                    הוא תהליך מורכב הדורש בחירה של הטכנולוגיה מתאימה, יישום
                    פתרונות חדשניים ומעקב אחר תהליכים. המפגש הראשון הוא עם מנהל
                    הפרויקטים שלנו שינסה לחקור ולהבין את סוג האתר, מטרתו וקהל
                    היעד. השלב של האיפיון הוא אבן היסוד של פיתוח האתר."
    />
    <Servie2
      title1={"צילום מוצרים"}
      title2={"צילום מוצרים"}
      design={"first"}
      about={"צילום ברמה מקצועית כל מיני מוצרים, כמו מנות אוכל ועוד"}
      imageRow={image5}
      showTitle={false}
      number={"5"}
      description="בניית אתרים מקצועית נעשה בכמה שלבים ובעזרת כמה בעלי מקצוע.
                    מרגע קבלת הרעיון מהלקוח, מחקר השוק , מי הם הלקוחות
                    הפוטנציאליים, תכנון, עיצוב ופיתוח. פיתוח מוצר דיגיטלי מצליח
                    הוא תהליך מורכב הדורש בחירה של הטכנולוגיה מתאימה, יישום
                    פתרונות חדשניים ומעקב אחר תהליכים. המפגש הראשון הוא עם מנהל
                    הפרויקטים שלנו שינסה לחקור ולהבין את סוג האתר, מטרתו וקהל
                    היעד. השלב של האיפיון הוא אבן היסוד של פיתוח האתר."
    />
    <ServiceLight2
      title1={"וקידום ברשתות חברתיות"}
      title2={"וקידום ברשתות חברתיות"}
      design={"no"}
      about={"פרסום בפייסבוק - שיווק וקידום ברשתות חברתיות"}
      imageRow={image6}
      number={"6"}
      description="בניית אתרים מקצועית נעשה בכמה שלבים ובעזרת כמה בעלי מקצוע.
                    מרגע קבלת הרעיון מהלקוח, מחקר השוק , מי הם הלקוחות
                    הפוטנציאליים, תכנון, עיצוב ופיתוח. פיתוח מוצר דיגיטלי מצליח
                    הוא תהליך מורכב הדורש בחירה של הטכנולוגיה מתאימה, יישום
                    פתרונות חדשניים ומעקב אחר תהליכים. המפגש הראשון הוא עם מנהל
                    הפרויקטים שלנו שינסה לחקור ולהבין את סוג האתר, מטרתו וקהל
                    היעד. השלב של האיפיון הוא אבן היסוד של פיתוח האתר."
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
