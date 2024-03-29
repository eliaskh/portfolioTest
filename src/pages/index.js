import React from "react"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Footer from "../components/_App/Footer"
import MainBannerElias2 from "../components/Elias/MainBannerElias2"
import Servie2 from "../components/Elias/Servie2"
import ServiceLight2 from "../components/Elias/ServiceLight2"
import Ourwork from "../components/Elias/Ourwork"
import image1 from "../assets/images/Elias/bnyatataremweb.jpg"
import image2 from "../assets/images/Elias/7.jpg"
import image3 from "../assets/images/Elias/uxuiweb.jpg"
import image4 from "../assets/images/Elias/graphicdesignerweb.jpg"
import image5 from "../assets/images/Elias/photographyweb.jpg"
import image6 from "../assets/images/Elias/socialmediaweb2.jpg"
import image8 from "../assets/images/Elias/cont2.png"
import image9 from "../assets/images/Elias/contactnews3.png"
import ContacForm from "../components/Elias/ContacForm"
import Mailchimp2 from "../components/Elias/Mailchimp2"
import { useInView } from "react-intersection-observer"
import RightMenu from "../components/Elias/RightMenu"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
function Index() {
  const { ref: myRef, inView: myElementIsVisible } = useInView()
  const breakpoints = useBreakpoint()

  return (
    <Layout>
      <SEO title="Home" />

      {breakpoints.sm ? <></> : <> {myElementIsVisible && <RightMenu />}</>}

      <MainBannerElias2 idSection="home" />

      <div className="spacer layer1"></div>

      <Servie2
        showSvg={false}
        idSection="things"
        title1={"בניית אתרים"}
        title2={"Web Development"}
        design={"no"}
        about={
          "לפתח יישומי אינטרנט מותאמים אישית, יעילים ככל האפשר למטרות העסקיות של הלקוח"
        }
        imageRow={image1}
        showTitle={true}
        number={"1"}
        // description={`helllo how are you.
        //  new line`}
        description={`בניית אתרים מקצועית נעשית בכמה שלבים בעזרת כמה בעלי מקצוע.
מרגע קבלת הרעיון מהלקוח, מחקר השוק , מי הם הלקוחות הפוטנציאליים, תכנון, עיצוב ופיתוח
פיתוח מוצר דיגיטלי מצליח הוא תהליך מורכב הדורש בחירה של הטכנולוגיה המתאימה, ישום פתרונות חדשניים ומעקב אחר התהליכים.`}
      />
      <div ref={myRef}>
        <ServiceLight2
          idSection="ux"
          title1={"עיצוב חווית משתמש"}
          title2={"UX/ UI"}
          design={"no"}
          about={
            "בניית דגם אינטראקטיבי ועיצוב ממשק משתמש אטרקטיבי ויזואלי וידידותי למשתמש"
          }
          imageRow={image3}
          number="2"
          description="חווית משתמש (UX) וממשק משתמש (UI) הם התהליכים הראשונים והחשובים ביותר בתכנון ועיצוב האתר.
הצורך החשוב ביותר הוא ליצור למשתמש אלמנט חוויתי בזמן השימוש באתר, בכדי לממש את הפוטנציאל של האתר, וליצור למשתמש תחושה נעימה, נגישה ונוחה.
התחושה מחברת בין המשתמש לממשק האתר, מאריכה את זמן הגלישה וההכרות עם המותג ועם כל השירותים אותם אתם מציעים באתר."
        />
        <Servie2
          showSvg={false}
          idSection="shop"
          title1={"חנויות אונליין"}
          title2={"Online shops"}
          design={"first"}
          about={"עיצוב ובניית חנויות מקוונות באמצעות הפלטפורמות המובילות בשוק"}
          imageRow={image2}
          showTitle={false}
          number={"3"}
          description=" הקמת חנות וירטואלית היא הדרך למנף מכירות ויכולת להגיע לכל לקוח פוטנציאלי בארץ ובעולם כולו.
אנו משתמשים בטכנולוגיות המתקדמות בעולם כדי לפתח ולעצב את החנות ולתת ללקוח נוחות וביטחון בקניה מקוונת.
החשיבות הגבוהה בביצועים המהירים של האתר שכנראה יכיל מאות של מוצרים היא קריטית בשביל מנועי החיפוש הגדולים, וכן עמידה בקתן נגישות ואבטחת מידע בזמן סליקת האשראי."
        />
        <ServiceLight2
          idSection="design1"
          title1={"עיצוב גרפי"}
          title2={"Graphic Design"}
          design={"no"}
          about={
            "יצירת כל מיני עיצובים גרפים, כמו פליירים,לוגו, כרטיסי ביקור, ברושור, חוברת, קטלוג ועוד"
          }
          imageRow={image4}
          number={"4"}
          description="יצירת כל מיני עיצובים גרפים, כמו פליירים,לוגו, כרטיסי ביקור, ברושור, חוברת, קטלוג ועוד"
        />
        <Servie2
          showSvg={false}
          idSection="photography"
          title1={"צילום מוצרים"}
          title2={"Photography"}
          design={"first"}
          about={"צילום ברמה מקצועית , כמו מנות אוכל ועוד"}
          imageRow={image5}
          showTitle={false}
          number={"5"}
          description="בעולם שלנו כיום, כל עסק שרוצה להוביל בתחומו, ובמיוחד כאשר מטרתו היא לקדם מכירות, חייב לדאוג למצוא צלם מוצרים, אשר מתמחה בצילום מוצרים מקצועי ובאיכות מושלמת – הצגת המוצרים באופן שיבליט את האתר, אל מול המתחרים הרבים באינטרנט ובכלל. ובכך ישפיע ישירות על הגדלת המכירות!"
        />
        <ServiceLight2
          idSection="kedom"
          title1={"קידום ברשתות חברתיות"}
          title2={"Social Media"}
          design={"no"}
          about={"פרסום בפייסבוק - שיווק וקידום ברשתות חברתיות"}
          imageRow={image6}
          number={"6"}
          description="ניתוח תנועת הגולשים היא הדרך החשובה ביותר להבנה ודיוק כחלק בלתי נפרד בקידום האתר שלכם.
איסוף וניתוח המידע על אופי המבקרים באתר יתן לנו ולכם כלים לקידומו ולשיפור החווית משתמש בזמן המעבר בין הדפים באתר.
בעזרת ניטור וניתוח בזמן אמת נגיע לפילוח שוק אופטימלי שבעזרתו נבנה תהליכים למנועי החיפוש המובילים."
        />
      </div>
      <Ourwork idSection="work" />
      <ContacForm idSection="contact" imageRow={image8} design={"first"} />
      {/* <Contact /> */}
      {/* <Newsletter title1={"subscribe"} title2={"בניית אתרים"} imageRow={image7} /> */}
      {/* <NewsletterStyleTwo /> */}
      {/* <Mailchimp /> */}
      {/* <Mailchimp2 imageRow={image9} design={"no"} /> */}
      <Footer />
    </Layout>
  )
}

export default Index
