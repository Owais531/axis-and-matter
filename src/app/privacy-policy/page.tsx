import { BASE_URL } from "@/constants/common";
import { Metadata } from "next";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import OGPrivacy from "../public/assets/images/axis-matter-hero-bg.png";
import styles from "./privacy-policy.module.scss";

export const metadata: Metadata = {
  title: "Axis & Matter | Strategic Marketing for Growth-Driven Brands",
  description:
    "Cut through marketing chaos with Axis & Matter. We deliver clear positioning, high-impact campaigns, and RevOps that drive real results for ambitious brands. Ready to elevate your strategy? Let's connect.",
  openGraph: {
    title: "Privacy Policy - Protecting Your Information & Online Experience",
    description:
      "Read our privacy policy to understand how we collect, use, and protect your information, including cookies and email preferences. Learn about your options to manage data and unsubscribe from communications.",
    images: [
      {
        url: `${BASE_URL}${OGPrivacy.src}`,
        alt: "privacy-policy",
      },
    ],
    siteName: "axis&matter",
    type: "website",
  },
};

const PrivacyPolicy = () => {
  return (
    <>
      <main className={`min-h-screen`}>
        <Header />
        <section className={`${styles.privacy_policy_content}`}>
          <div className={`${styles.privacy_policy_heading}`}>
            <h1>Privacy Policy</h1>
          </div>
          <div className={`${styles.privacy_policy_body}`}>
            <div className={`${styles.privacy_policy_body_section}`}>
              <h5>Information that is gathered from visitors</h5>
              <p>
                In common with other websites, log files are stored on the web
                server saving details such as the visitor’s IP address, browser
                type, referring page and time of visit. Cookies may be used to
                remember visitor preferences when interacting with the website.
                Where registration is required, the visitor’s email, and a
                username will be stored on the server.
              </p>
            </div>
            <div className={`${styles.privacy_policy_body_section}`}>
              <h5>How the Information is used</h5>
              <p>
                The information is used to enhance the visitor’s experience when
                using the website to display personalized content and possibly
                advertising. E-mail addresses will not be sold, rented or leased
                to 3rd parties. E-mail may be sent to inform you of news of our
                services or offers by us or our affiliates.
              </p>
            </div>
            <div className={`${styles.privacy_policy_body_section}`}>
              <h5>Visitor Options</h5>
              <p>
                If you have subscribed to one of our services, you may
                unsubscribe by following the instructions which are included in
                the email that you receive. You may be able to block cookies via
                your browser settings but this may prevent you from access to
                certain features of the website.
              </p>
            </div>
            <div className={`${styles.privacy_policy_body_section}`}>
              <h5>Cookies</h5>
              <p>
                Cookies are small digital signature files that are stored by
                your web browser that allow your preferences to be recorded when
                visiting the website. Also, they may be used to track your
                return visits to the website. 3rd party advertising companies
                may also use cookies for tracking purposes.
              </p>
            </div>
          </div>
        </section>
        <ContactUsForm />
        <Footer />
      </main>
    </>
  );
};

export default PrivacyPolicy;
