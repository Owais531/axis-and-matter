import { BASE_URL } from "@/constants/common";
import { Metadata } from "next";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import OGInfo from "../public/assets/images/axis-matter-hero-bg.png";
import styles from "./information-security.module.scss";

export const metadata: Metadata = {
  title: "Axis & Matter | Strategic Marketing for Growth-Driven Brands",
  description:
    "Cut through marketing chaos with Axis & Matter. We deliver clear positioning, high-impact campaigns, and RevOps that drive real results for ambitious brands. Ready to elevate your strategy? Let's connect.",
  openGraph: {
    title:
      "Information Security Policy - Ensuring Data Protection & Compliance at nuSoft",
    description:
      "Explore axis and matter's information security policy, which is designed to protect client data and corporate assets. Learn about our commitment to confidentiality, integrity, availability, and compliance with legal, regulatory, and business requirements.",
    images: [
      {
        url: `${BASE_URL}${OGInfo.src}`,
        alt: "information-security-policy",
      },
    ],
    siteName: "axis&matter",
    type: "website",
  },
};

const InformationSecurity = () => {
  return (
    <>
      <main className={`min-h-screen`}>
        <Header />
        <section className={`${styles.information_security_content}`}>
          <div className={`${styles.information_security_heading}`}>
            <h1>Information Security Policy</h1>
          </div>
          <div className={`${styles.information_security_body}`}>
            <div className={`${styles.information_security_body_section}`}>
              <p>
                It is the policy of axis & matter to create, maintain, and continually
                improve the Information Security Management System and to adhere
                to Information Security Management System practices in
                compliance with best practices required for software development
                and information security needs of the customer.
              </p>
              <p>
                axis & matter works within the framework of the Local Government while
                fulfilling the contractual obligation to the client. This is to
                ensure the protection of its information assets from all threats
                – internal or external, deliberate or accidental, and natural
                disasters.
              </p>
              <ul>
                <p>
                  Furthermore, to achieve this objective, axis & matter will ensure the
                  following:
                </p>
                <li>
                  Business requirements for the availability of information and
                  systems are met.
                </li>
                <li>
                  Confidentiality, Integrity, and Availability (CIA) of the
                  information is maintained throughout the process flow.
                </li>
                <li>
                  All legal, regulatory, contractual, and business requirements
                  are met.
                </li>
                <li>
                  All corporate assets (tangible/intangible) are located in a
                  physically and logically secure environment.
                </li>
                <li>
                  Risks to all corporate assets (tangible/intangible) are
                  assessed and appropriate contingency and risk mitigation plans
                  are defined against all risks.
                </li>
                <li>
                  Human resources are provided with a conducive work
                  environment, free from safety hazards.
                </li>
                <li>
                  All personnel are trained on information security procedures.
                </li>
                <li>
                  Physical, Logical, and Remote access to all the corporate
                  assets (tangible/intangible), information and physical
                  locations is monitored and controlled.
                </li>
                <li>
                  Business continuity plans are established, maintained, and
                  tested periodically and updated as needed.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <ContactUsForm />
        <Footer />
      </main>
    </>
  );
};

export default InformationSecurity;
