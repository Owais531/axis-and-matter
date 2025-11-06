"use client";

import { useState } from "react";
import styles from "./HomeExpertise.module.scss";

const data = [
  {
    name: "Salesforce",
    title: "System Architecture & Data Integrity",
    capabilities:
      "Our work focuses on structuring the platform to enforce business processes, ensure data integrity, and provide a coherent framework for all commercial operations.",
    price: "25$",
    subtitle: "Lorem ipsum dolor",
    features: [
      "System Implementation & Architecture",
      "Workflow & Process Engineering",
      "Integration & Data Modeling",
      "Analytics & Reporting Frameworks",
    ],
  },
  {
    name: "Marketo",
    title: "Marketing Orchestration & Automation",
    capabilities:
      "We design and implement the underlying logic for lifecycle management, lead qualification, and multi-channel engagement to ensure systematic and measurable execution.",
    price: "40$",
    subtitle: "Lorem ipsum dolor",
    features: [
      "Lifecycle Modeling & Automation",
      "Multi-Channel Program Architecture",
      "Lead Scoring & Nurture Systems",
      "Measurement & Attribution Models",
    ],
  },
  {
    name: "HubSpot",
    title: "Unified Platform Integration",
    capabilities:
      "We focus on structuring the HubSpot platform as a single, cohesive system. The objective is to unify the Marketing, Sales, and Service Hubs to create a coherent operational framework, eliminating friction between functions and the customer.",
    price: "35$",
    subtitle: "Lorem ipsum dolor",
    features: [
      "Full-Platform Architecture",
      "Inbound Methodology Implementation",
      "Sales Hub & Process Integration",
      "System-Wide Workflow Automation",
    ],
  },
];

const HomeExpertise = () => {
  const [active, setActive] = useState(data[0]);

  return (
    <section
      className={`py-16 px-6 text-center text-white ${styles.home_expertise_container}`}
    >
      <div className={`${styles.content_wrapper}`}>
        {/* Title */}
        <h2 className="mb-8 text-left">Our Expertise</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-1 md:gap-4 mb-12">
          {data.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item)}
              className={`${styles.tab} ${
                active.name === item.name ? styles.active : ""
              }`}
            >
              <h5>{item.name}</h5>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left */}
          <div className={`${styles.card} ${styles.lightCard}`}>
            <h3 className="font-semibold mb-4 text-black">{active.title}</h3>
            <p className="text-gray-600">{active.capabilities}</p>
          </div>

          {/* Right */}
          <div className={`${styles.card} ${styles.darkCard}`}>
            {/* <h3 className="font-semibold mb-4">
              {active.price} <span>{active.subtitle}</span>
            </h3> */}
            <ul className="list-disc pl-6 mb-6">
              {active.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            {/* <Link href="#contact-us-form">
              <Button label="Buy now" btnClass="whiteBtn" />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeExpertise;
