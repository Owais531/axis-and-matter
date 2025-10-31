import { ArrowRight } from "lucide-react";
import styles from "./HomeServices.module.scss";

const services = [
  {
    title: "Core Service Offerings",
    description:
      "Each service is designed to build and sustain brand momentum with precision and purpose.",
    cta_text: "",
  },
  {
    title: "Market Positioning & Architecture",
    description:
      "Define your ideal customer profile and architect an undeniable market position. The deliverable is a comprehensive playbook engineered to double qualified traffic within a single quarter.",
    cta_text: "Sharpen Your Position",
  },
  {
    title: "Integrated Growth Campaigns",
    description:
      "Paid media that performs, content that compounds, and social media that resonates. We manage the entire growth engine, from asset creation to campaign execution, to deliver sustained engagement and measurable pipeline.",
    cta_text: "Fuel Your Pipeline",
  },
  {
    title: "Digital Ecosystems",
    description:
      "Transform your website from a digital brochure into your most effective sales asset. Through meticulous UX/UI and conversion design, we build sites engineered to perform at an elite level (20%+ conversion).",
    cta_text: "Upgrade Your Presence",
  },
  {
    title: "Revenue Operations Integration",
    description:
      "Mastery of Salesforce, HubSpot, and Marketo to build systems that nurture. We design intelligent automations that eliminate funnel leakage and capture latent revenue.",
    cta_text: "Lock In Efficiency",
  },
  {
    title: "Narrative & Conversion Copy",
    description:
      "Develop a definitive voice for your brand. From websites to advertisements and email sequences, we craft copy that cuts through the noise and translates your narrative directly into revenue.",
    cta_text: "Amplify Your Message",
  },
];

const HomeServices = () => {
  return (
    <>
      <div id="services" className={`${styles.home_services_conatiner}`}>
        <div className={`grid grid-cols-3 gap-4 ${styles.content_wrapper}`}>
          {services.map((service, index) =>
            index === 0 ? (
              <div
                key={index}
                className="flex flex-col col-span-3 md:col-span-1 justify-start"
              >
                <h2 className="font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ) : (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition flex col-span-3 md:col-span-1 flex-col justify-between"
              >
                <h5 className="mb-4 font-semibold">{service.title}</h5>
                <small className="text-gray-600">{service.description}</small>
                <button
                  className={`mt-6 flex items-center gap-2 text-black group`}
                >
                  <ArrowRight className="w-10 h-10 transform group-hover:translate-x-1 transition" />
                  <small>{service.cta_text}</small>
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default HomeServices;
