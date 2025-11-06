"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../public/assets/images/axis-and-matter-logo.svg";
import Button from "../Button/Button";
import NavMenu from "./components/NavMenu/NavMenu";
import styles from "./Header.module.scss";

const Header = () => {
  const [visible, setVisible] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 170) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`${styles.header_container} ${
        visible ? styles.visible : styles.hidden
      } md:opacity-90`}
    >
      <div className={`${styles.header_inner_div}`}>
        <div className="flex flex-row items-center">
          <div>
            <Link href="/" onClick={handleClick}>
              <Image
                src={Logo}
                alt="header-logo"
                className={`${styles.header_logo}`}
              />
            </Link>
          </div>
          <div className="hidden md:flex">
            <NavMenu />
          </div>
        </div>
        <div className="hidden md:flex">
          <Link href="#contact-us-form">
            <Button btnClass="filledBtn" label="Get in touch" />
          </Link>
        </div>
        <div className={`${styles.mobile_nav} flex md:hidden`}>
          <NavMenu />
        </div>
        {/* <div className={`hidden md:flex ${styles.header_contact_us_button}`}>
          <Link href="/contact-us">
            <Button btnClass="outlinedBtn" label="Get in touch" />
          </Link>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
