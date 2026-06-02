"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Matt from "../../public/assets/images/matt.png";
import Hamza from "../../public/assets/images/hamza.png";
import Kapil from "../../public/assets/images/kapil.png";
import Tom from "../../public/assets/images/tom.png";
import Bill from "../../public/assets/images/bill.png";
import Venu from "../../public/assets/images/venu.png";
import LeftArrow from "../../public/assets/images/testimonial-left-arrow-am.svg";
import RightArrow from "../../public/assets/images/testimonial-right-arrow-am.svg";
import styles from "./HomeTestimonial.module.scss";

const testimonials = [
  {
    id: 1,
    name: "Matt Crews",
    role: "Founder & CEO, TurnTech",
    text: `"We chose nuSoft for their creativity and collaboration, and they exceeded our expectations. It's great to have a partner you can trust when launching a business."`,
    image: Matt,
  },
  {
    id: 2,
    name: "Hamza Gheewala",
    role: "Co-Founder, Tamba",
    text: `"Tamba’s partnership with nuSoft has been marked by professionalism, dedication, and reliability. We look forward to many more years together!"`,
    image: Hamza,
  },
  {
    id: 3,
    name: "Kapil Patnik",
    role: "CEO, Caretecher",
    text: `"nuSoft has been an instrumental part of our team, delivering exceptional service and work ethic. Highly recommended!"`,
    image: Kapil,
  },
  {
    id: 4,
    name: "Tom Holt",
    role: "CRO, DataEndure",
    text: `"nuSoft’s depth of expertise and urgency consistently impress us. We rely on them for internal software integration and deployment."`,
    image: Tom,
  },
  {
    id: 5,
    name: "Bill Bosworth",
    role: "DSD, Intervision",
    text: `"nuSoft is fast, responsive, and dependable—a stalwart in our development efforts. Always a pleasure to work with them."`,
    image: Bill,
  },
  {
    id: 6,
    name: "Venu Hemige",
    role: "VP Engg, Graphiant",
    text: `"nuSoft's expertise and collaboration have helped us accelerate our development lifecycle. Safwan and his team are reliable partners, making it an easy decision to work with them again."`,
    image: Venu,
  },
];

const HomeTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Get visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    if (isMobile) {
      // On mobile, show only the center testimonial
      return [{ ...testimonials[activeIndex], position: "center" }];
    } else {
      // On desktop, show three testimonials
      const leftIndex =
        (activeIndex - 1 + testimonials.length) % testimonials.length;
      const rightIndex = (activeIndex + 1) % testimonials.length;

      return [
        { ...testimonials[leftIndex], position: "left" },
        { ...testimonials[activeIndex], position: "center" },
        { ...testimonials[rightIndex], position: "right" },
      ];
    }
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className={styles.testimonials_container}>
      <div className={styles.content_wrapper}>
        <h2 className={styles.title}>The Measure of Our Partnerships</h2>

        <div className={styles.carousel_container}>
          {/* Left Arrow */}
          <Image
            src={LeftArrow}
            alt="left arrow"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className={`${styles.arrow_btn} ${styles.arrow_left}`}
          />

          {/* Cards Container */}
          <div className={styles.cards_wrapper}>
            {visibleTestimonials.map((item) => (
              <div
                key={`${item.id}-${activeIndex}`}
                className={`${styles.card} ${styles[item.position]}`}
              >
                <div className={styles.card_header}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    className={styles.avatar}
                    width={40}
                    height={40}
                  />
                  <div className={styles.user_info}>
                    <p className={styles.user_name}>{item.name}</p>
                    <small className={styles.user_role}>{item.role}</small>
                  </div>
                </div>
                <div className={styles.card_body}>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <Image
            src={RightArrow}
            alt="right arrow"
            onClick={handleNext}
            aria-label="Next testimonial"
            className={`${styles.arrow_btn} ${styles.arrow_right}`}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
