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
  title: "Axis & Matter | Strategic Marketing for Growth-Driven Brands",
  description:
    "Cut through marketing chaos with Axis & Matter. We deliver clear positioning, high-impact campaigns, and RevOps that drive real results for ambitious brands. Ready to elevate your strategy? Let's connect.",
  openGraph: {
    title: "Clarity in the Chaos: Axis & Matter Marketing Agency Mirrors homepage headline for consistency in shares.",
    description:
      "In a noisy world, we build brands that matter. From ICP strategy to automated growth, discover how our expertise in Salesforce, HubSpot, and more can transform your business. Tailored for social previews; emphasizes unique value props like tools/partners.",
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
