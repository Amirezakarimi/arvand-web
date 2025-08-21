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
      title: "Introduction",
      text: [
        "eWorldtrade is a comprehensive B2B marketplace having over 10 years of expertise in digital branding and web development. The B2B Marketplace currently caters over 7,000,000 registered users and briskly expanding its database of manufacturers, suppliers and companies from all over the world. The digital trading platform is intelligently designed and developed to address fierce business competition by providing a safe, fast, reliable and authentic medium of trading. eWorldTrade is integrated with all new advance features and functionalities that have never been offered by any other B2B portal. To compete with aggressive marketing trends and brand development eWorldTrade is the only B2B portal helping millions of traders in expressing their presence globally.",
      ],
    },
    {
      title: "Company Overview",
      text: [
        "eWorldtrade is structured to be one of the most transparent global B2B marketplace converging millions of potential wholesalers, buyers & sellers under one hood. We are committed to provide authentic, fast and innovative trading solutions with all new and smart features making trading even effective.",
        "eWorldTrade is a distinguished B2B platform bridging buyers with effective digital solutions and services for better brand development. We have redefined the global trade with value added services like Digital Branding, community & reputation management.",
      ],
    },
    {
      title: "Your Key to Success",
      text: [
        "We love making brands your customers to take your business to a global level. Eworldtade.com is not merely a B2B portal rather it allows selling to the world by connecting authentic buyers and suppliers featuring exciting services and user-experience.",
      ],
    },
  ];
  const AboutOur = [
    {
      title: "Mission",
      text: "Our mission is to establish a fast and reliable trading platform that would work in the best interest of buyers and suppliers. The organization is focused in overcoming all B2B marketplace challenges and loop holes relentlessly, introducing trading transparency and utmost quality. Delivering unparalleled satisfaction and profitability with guaranteed productivity is what we seek. ",
    },
    {
      title: "Vision",
      text: "In harmony with our core values and stake holders, our goal is to be the largest and finest B2B marketplace with bunch of incredible features, unsurpassed services and everlasting support. Acquiring effective digital expertise to help connect traders in developing unique brand persona. ",
    },
    {
      title: "Goals",
      text: "Our goal is to be your ultimate trading partner with safe and innovative trading solutions. With our well-define structure and effective strategy, eWorldTrade gives an opportunity to all business partners be it wholesalers, retailers, buyers, sellers, middlemen to do online safe trade dealings with each other irrelevant of any limitation to time or place. ",
    },
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
