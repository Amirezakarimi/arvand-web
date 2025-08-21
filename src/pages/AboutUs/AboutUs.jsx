import React from "react";
import { Banner, AboutUsPar } from "../../components";

import BgBanner from "../../assets/Banners/about-banner.jpg";
export default function AboutUs() {
  const BannerInfo = {
    Image: BgBanner,
    title: "آروند پلیمر",
    text: "درباره ما",
  };
  const AboutUsParList = [
    {
      title: "تاریخچه و معرفی شرکت",
      text: [
        "از سال 1378 مجموعه پارس پلیمر نوین فعالیت خود را در صنعت لوله و اتصالات با سرلوحه قرار دادن سه اصل : کیفیت، نوآوری، مشتری مداری.",
        "خلاقیت محوری در ابعاد مختلف این صنعت به ویژه در بعد بازاریابی و فروش جهت افزایش تمایل مشتری به خرید، کاهش ترس از خریداشتباه، برطرف نمودن نیازها، ایجاد حس امنیت، در دسترس بودن و پاسخگویی مجموعه و خدمات سازگار با معیارهای مشتری نیازمند توسعه فعالیت و عبور از اقتصاد سنتی فروشندگی و نماینده محوری و عاملیت به اقتصاد دانشی و اطلاعات بوده.",
        "با توجه به اینکه صنعت لوله و اتصالات در حال حاضر در حال توسعه و گسترش است و به علت سرعت بالای این صنعت، همین سرعت باعث سرعت بالای توسعه و گسترش مجموعه پارس پلیمر نوین شده است. همچنین با توجه به اینکه صنعت لوله و اتصالات در حال حاضر در حال توسعه و گسترش است و به علت سرعت بالای این صنعت، همین سرعت باعث سرعت بالای توسعه و گسترش مجموعه پارس پلیمر نوین شده است.",
      ],
    },
    // {
    //   title: "Company Overview",
    //   text: [
    //     "eWorldtrade is structured to be one of the most transparent global B2B marketplace converging millions of potential wholesalers, buyers & sellers under one hood. We are committed to provide authentic, fast and innovative trading solutions with all new and smart features making trading even effective.",
    //     "eWorldTrade is a distinguished B2B platform bridging buyers with effective digital solutions and services for better brand development. We have redefined the global trade with value added services like Digital Branding, community & reputation management.",
    //   ],
    // },
    {
      title: "کلید موفقیت ما",
      text: [
        "کلید موفقیت ما بر سه اصل استوار است: کیفیت پایدار، نوآوری هدفمند و مشتری‌مداری واقعی. با تکیه بر تیم متخصص، پایبندی به استانداردها و بهبود مستمر فرآیندها، محصولاتی ارائه می‌کنیم که هم پایدار و رقابتی‌اند و هم به‌موقع تحویل می‌شوند. شفافیت در همکاری، مسئولیت‌پذیری و تصمیم‌گیری داده‌محور، ما را به شریکی قابل اتکا برای رشد پایدار تبدیل کرده است."
      ],
    },
  ];
  const AboutOur = [
    {
      title: "اهداف کسب و کار",
      text: "مجموعه پارس پلیمر نوین با توجه به اینکه صنعت لوله و اتصالات در حال حاضر در حال توسعه و گسترش است و به علت سرعت بالای این صنعت، همین سرعت باعث سرعت بالای توسعه و گسترش مجموعه پارس پلیمر نوین شده است. همچنین با توجه به اینکه صنعت لوله و اتصالات در حال حاضر در حال توسعه و گسترش است و به علت سرعت بالای این صنعت، همین سرعت باعث سرعت بالای توسعه و گسترش مجموعه پارس پلیمر نوین شده است.",
    },
    {
      title: "کسب و کار موفق",
      text: "کسب و کاری موفق است که جدا از سود خود به رضایت مشتری فکر کند. این احساس رضایت است که مشتری را قانع می کند تا خرید دوباره ای داشته باشد و ما را به آشنایان و دوستان خود معرفی کند. پس از سود لحظه ای خود صرف نظر می کنیم تا به سود پایدار و همیشگی برسیم. باتوجه به پیشرفت علم و دانش و تغییر سبک معاملات همواره مشتریان و مصرف کنندگان با آگاهی کامل و هوشمندانه به دنبال محصولات با کیفیت و قیمت و خدمات ارزانتر هستند.",
    },
    // {
    //   title: "Goals",
    //   text: "Our goal is to be your ultimate trading partner with safe and innovative trading solutions. With our well-define structure and effective strategy, eWorldTrade gives an opportunity to all business partners be it wholesalers, retailers, buyers, sellers, middlemen to do online safe trade dealings with each other irrelevant of any limitation to time or place. ",
    // },
  ];
  return (
    <>
      <Banner
        Image={BannerInfo.Image}
        title={BannerInfo.title}
        text={BannerInfo.text}
      />
      <AboutUsPar AboutOur={AboutOur} AboutUsPar={AboutUsParList} />
    </>
  );
}
