import Image from "next/image";
// import SocialFacebook from "../../public/assets/images/social-icon-facebook.svg";
import Link from "next/link";
import SocialInsta from "../../public/assets/images/insta-am.svg";
import SocialLinkedin from "../../public/assets/images/linkedin-am.svg";
import styles from "./Footer.module.scss";
import Logo from "../../public/assets/images/axis-and-matter-logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div
          className={`${styles.footer_container} grid grid-cols-4 items-center`}
        >
          <div className="flex justify-center md:justify-start col-span-4 md:col-span-1">
            <Image src={Logo} alt="axis-matter-logo" />
          </div>
          <div className="flex justify-center col-span-4 md:col-span-1 mt-8 md:mt-0">
            <div className="grid grid-cols-2">
              <Link
                className={`${styles.footer_anchor} flex col-span-2 md:col-span-1 justify-start`}
                href="/information-security"
              >
                Information Security Policy
              </Link>
              <Link
                className={`${styles.footer_anchor} m-auto flex col-span-2 md:col-span-1`}
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex col-span-4 md:col-span-1 justify-center">
            <p className={`${styles.footer_copyright_text}`}>
              Axis & Matter © 2025. All rights reserved.
            </p>
          </div>
          <div className="flex flex-row col-span-4 md:col-span-1 justify-center md:justify-end">
            <a
              href="https://www.instagram.com/nusoft.co/profilecard/?igsh=bzZtam1laDk2anBw"
              target="_blank"
            >
              <Image
                className={`${styles.footer_social_icon}`}
                src={SocialInsta}
                alt="Insta"
              />
            </a>
            <a href="https://www.linkedin.com/company/nusoftco" target="_blank">
              <Image
                className={`${styles.footer_social_icon}`}
                src={SocialLinkedin}
                alt="Linkedin"
              />
            </a>
            {/* <a>
            <Image
              className={`${styles.footer_social_icon}`}
              src={SocialFacebook}
              alt="Facebook"
            />
            </a> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
