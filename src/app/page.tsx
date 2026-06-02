import { BASE_URL } from "@/constants/common";
import { Metadata } from "next";
import ContactUsForm from "./components/ContactUsForm/ContactUsForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeAbout from "./components/HomeAbout/HomeAbout";
import HomeCaseStudy from "./components/HomeCaseStudy/HomeCaseStudy";
import HomeCTA from "./components/HomeCTA/HomeCTA";
import HomeExpertise from "./components/HomeExpertise/HomeExpertise";
import HomeHero from "./components/HomeHero/HomeHero";
import HomePartners from "./components/HomePartners/HomePartners";
import HomePricing from "./components/HomePricing/HomePricing";
import HomeServices from "./components/HomeServices/HomeServices";
import HomeTestimonials from "./components/HomeTestimonial/HomeTestimonial";
import OGHome from "./public/assets/images/axis-matter-hero-bg.png";

export const metadata: Metadata = {
  title: "Axis & Matter | Marketing for Brands That Make a Difference",
  description:
    "Cut through market noise with Axis & Matter. We deliver clear positioning, high-impact campaigns, and marketing automation that drive real results for ambitious brands.",
  openGraph: {
    title: "Stand out in a saturated market | Axis & Matter",
    description:
      "We build brands that matter. From ICP strategy to automated growth, discover how our expertise in Salesforce, HubSpot, and more can transform your business.",
    images: [
      {
        url: `${BASE_URL}${OGHome.src}`,
        alt: "a&m-home",
      },
    ],
    siteName: "axis&matter",
    type: "website",
  },
};

const Homepage = () => {
  return (
    <>
      <main className={`min-h-screen`}>
        <Header />
        <HomeHero />
        <HomePartners />
        <HomeAbout />
        <HomeCTA />
        <HomeServices />
        <HomeExpertise />
        <HomePricing />
        <HomeTestimonials />
        <HomeCaseStudy />
        <ContactUsForm />
        <Footer />
      </main>
    </>
  );
};

export default Homepage;
