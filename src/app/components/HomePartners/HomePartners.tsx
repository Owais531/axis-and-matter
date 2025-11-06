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
import PathApp from "../../public/assets/images/path-app-am.png";
import Spectredge from "../../public/assets/images/spectredge-am.png";
import Tamba from "../../public/assets/images/tamba-am.png";
import Textify from "../../public/assets/images/textify-am.png";
import styles from "./HomePartners.module.scss";

const logos = [
  { src: EMA, alt: "ema", height: 25 },
  { src: Caretecher, alt: "caretecher", height: 50 },
  { src: Textify, alt: "textify", height: 32 },
  { src: NRTC, alt: "nrtc", height: 25 },
  { src: CBT, alt: "cbt", height: 32 },
  { src: Spectredge, alt: "spectredge", height: 25 },
  { src: Intervision, alt: "intervision", height: 32 },
  { src: Graphiant, alt: "graphiant", height: 25 },
  { src: Dataendure, alt: "dataendure", height: 20 },
  { src: Tamba, alt: "tamba", height: 25 },
  { src: PathApp, alt: "path-app", height: 40 },
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
      <div className={`${styles.home_partners_container} border-t border-b border-gray-200 md:border-0`}>
        <div className={`${styles.content_wrapper}`}>
          <div className={`${styles.logos_wrapper}`}>
            <div className={`${styles.marquee_container}`}>
              <div ref={marqueeRef} className={`${styles.marquee}`}>
                {logos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    height={logo.height}
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
