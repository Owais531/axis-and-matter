"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Caretecher from "../../public/assets/images/caretecher-am.png";
import CBT from "../../public/assets/images/cbt-am.png";
import Dataendure from "../../public/assets/images/dataendure-am.png";
import EMA from "../../public/assets/images/ema-am.png";
import Graphiant from "../../public/assets/images/graphiant-am.png";
import Intervision from "../../public/assets/images/intervision-am.png";
import NRTC from "../../public/assets/images/nrtc-am.png";
import Spectredge from "../../public/assets/images/spectredge-am.png";
import Tamba from "../../public/assets/images/tamba-am.png";
import Textify from "../../public/assets/images/textify-am.png";
import styles from "./HomePartners.module.scss";

const logos = [
  { src: EMA, alt: "ema" },
  { src: Caretecher, alt: "caretecher" },
  { src: Textify, alt: "textify" },
  { src: NRTC, alt: "nrtc" },
  { src: CBT, alt: "cbt" },
  { src: Spectredge, alt: "spectredge" },
  { src: Intervision, alt: "intervision" },
  { src: Graphiant, alt: "graphiant" },
  { src: Dataendure, alt: "dataendure" },
  { src: Tamba, alt: "tamba" },
];

const HomePartners = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const clonedContent = marquee.innerHTML;
    marquee.innerHTML += clonedContent;

    const totalWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: `-${totalWidth}px`,
      duration: 25,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <>
      <div className={`${styles.home_partners_container}`}>
        <div className={`${styles.content_wrapper}`}>
          <div className={`${styles.logos_wrapper}`}>
            <div className={`${styles.marquee_container}`}>
              <div ref={marqueeRef} className={`${styles.marquee}`}>
                {logos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-12 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePartners;
