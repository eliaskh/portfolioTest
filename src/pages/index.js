import React from "react"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import MainBannerElias2 from "../components/Elias/MainBannerElias2"
import Servie2 from "../components/Elias/Servie2"
import ServiceLight2 from "../components/Elias/ServiceLight2"
import Footer from "../components/_App/Footer"
import Ourwork from "../components/Elias/Ourwork"
import image1 from "../assets/images/Elias/im1.jpg"
import image2 from "../assets/images/Elias/im2.jpg"
import image3 from "../assets/images/Elias/im3.jpg"
import image4 from "../assets/images/Elias/im4.jpg"
import image5 from "../assets/images/Elias/im5.jpg"
import image6 from "../assets/images/Elias/wow.jpg"

import image7 from "../assets/images/Elias/news.jpg"
import NewsletterStyleTwo from "../components/Common/NewsletterStyleTwo"
import Newsletter from "../components/Elias/Newsletter"
const BigdataAnalytics = () => (
  <Layout>
    <SEO title="Home" />

    <MainBannerElias2 />

    <Servie2
      idSection="things"
      title1={"בניית אתרים"}
      title2={"בניית אתרים"}
      design={"no"}
      about={
        "לפתח יישומי אינטרנט מותאמים אישית, יעילים ככל האפשר למטרות העסקיות של הלקוח"
      }
      imageRow={image1}
      showTitle={true}
      number={"1"}
      description="בניית אתרים מקצועית נעשה בכמה שלבים ובעזרת כמה בעלי מקצוע. מרגע קבלת הרעיון מהלקוח, מחקר השוק , מי הם הלקוחות הפוטנציאליים, תכנון, עיצוב ופיתוח.
פיתוח מוצר דיגיטלי מצליח הוא תהליך מורכב הדורש בחירה של הטכנולוגיה מתאימה, יישום פתרונות חדשניים ומעקב אחר תהליכים."
    />

    <ServiceLight2
      idSection="ux"
      title1={"עיצוב חווית משתמש"}
      title2={"עיצוב חווית משתמש"}
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
      idSection="shop"
      title1={"חנויות אונליין"}
      title2={"חנויות אונליין"}
      design={"first"}
      about={"עיצוב ובניית חנויות מקוונות באמצעות הפלטפורמות המובילות בשוק"}
      imageRow={image2}
      showTitle={false}
      number={"3"}
      description="הקמת חנות וירטואלית היא הדרך למנף מכירות ויכולת להגיע לכל לקוח פוטנציאלי בארץ ובעולם כולו.

אנו משתמשים בטכנולוגיות המתקדמות בעולם כדי לפתח ולעצב את החנות ולתת ללקוח נוחות וביטחון בקניה מקוונת.

החשיבות הגבוהה בביצועים המהירים של האתר שכנראה יכיל מאות של מוצרים היא קריטית בשביל מנועי החיפוש הגדולים, וכן עמידה בקתן נגישות ואבטחת מידע בזמן סליקת האשראי."
    />
    <ServiceLight2
      idSection="design1"
      title1={"עיצוב גרפי"}
      title2={"עיצוב גרפי"}
      design={"no"}
      about={
        "יצירת כל מיני עיצובים גרפים, כמו פליירים,לוגו, כרטיסי ביקור, ברושור, חוברת, קטלוג ועוד"
      }
      imageRow={image4}
      number={"4"}
      description="יצירת כל מיני עיצובים גרפים, כמו פליירים,לוגו, כרטיסי ביקור, ברושור, חוברת, קטלוג ועוד"
    />
    <Servie2
      idSection="photography"
      title1={"צילום מוצרים"}
      title2={"צילום מוצרים"}
      design={"first"}
      about={"צילום ברמה מקצועית כל מיני מוצרים, כמו מנות אוכל ועוד"}
      imageRow={image5}
      showTitle={false}
      number={"5"}
      description="בעולם שלנו כיום, כל עסק שרוצה להוביל בתחומו, ובמיוחד כאשר מטרתו היא לקדם מכירות, חייב לדאוג למצוא צלם מוצרים, אשר מתמחה בצילום מוצרים מקצועי ובאיכות מושלמת – הצגת המוצרים באופן שיבליט את האתר, אל מול המתחרים הרבים באינטרנט ובכלל. ובכך ישפיע ישירות על הגדלת המכירות!"
    />
    <ServiceLight2
      idSection="kedom"
      title1={"וקידום ברשתות חברתיות"}
      title2={"וקידום ברשתות חברתיות"}
      design={"no"}
      about={"פרסום בפייסבוק - שיווק וקידום ברשתות חברתיות"}
      imageRow={image6}
      number={"6"}
      description="ניתוח תנועת הגולשים היא הדרך החשובה ביותר להבנה ודיוק כחלק בלתי נפרד בקידום האתר שלכם.

איסוף וניתוח המידע על אופי המבקרים באתר יתן לנו ולכם כלים לקידומו ולשיפור החווית משתמש בזמן המעבר בין הדפים באתר.

בעזרת ניטור וניתוח בזמן אמת נגיע לפילוח שוק אופטימלי שבעזרתו נבנה תהליכים למנועי החיפוש המובילים."
    />

    <Ourwork idSection="work" />

    {/* <Newsletter title1={"subscribe"} title2={"בניית אתרים"} imageRow={image7} /> */}
    {/* <NewsletterStyleTwo /> */}
    <Footer />
  </Layout>
)

export default BigdataAnalytics
