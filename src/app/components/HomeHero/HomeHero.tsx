"use client";

import Image from "next/image";
import Link from "next/link";
import Arrows from "../../public/assets/images/axis-matter-hero-bg-arrows.png";
import Button from "../Button/Button";
import styles from "./HomeHero.module.scss";

const HomeHero = () => {
  return (
    <>
      <div className={`${styles.hero_container}`}>
        <div className={`${styles.top_div}`} />
        <div className={`grid grid-cols-3 ${styles.hero_heading_wrapper}`}>
          <h1 className={`flex col-span-2 ${styles.hero_heading}`}>
            The Nexus of Strategy & Creative
          </h1>
          <div className={`flex col-span-1 ${styles.border_div_1}`} />
        </div>
        <div className={`grid grid-cols-3 ${styles.hero_subheading_wrapper}`}>
          <div
            className={`flex flex-col col-span-3 md:col-span-1 ${styles.hero_subheading}`}
          >
            <p>
              In a marketplace where most campaigns stumble on indistinct
              messaging, <span>we build brands with meaning.</span> Our
              process comprises discerning strategy and formidable
              creative, engineered to ensure your voice is the one that’s heard.
            </p>
            <div className="mt-10">
              <Link href='#contact-us-form'>
                <Button btnClass="filledBtn" label="Get started" enableArrow />
              </Link>
            </div>
          </div>
          <div className={`flex col-span-2 ${styles.border_div_2}`} />
        </div>
        <div className="hidden md:block">
          <Image
            src={Arrows}
            alt="arrows"
            className={`${styles.home_hero_bg_arrows}`}
          />
        </div>
      </div>
    </>
  );
};

export default HomeHero;
