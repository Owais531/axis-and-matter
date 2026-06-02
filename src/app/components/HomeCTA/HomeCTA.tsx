import Link from "next/link";
import Button from "../Button/Button";
import styles from "./HomeCTA.module.scss";

const HomeCTA = () => {
  return (
    <>
      <div className={`${styles.home_cta_conatiner}`}>
        <div className={`flex flex-col gap-4 ${styles.content_wrapper}`}>
          <p className={`${styles.description_para}`}>
            Our strategies go beyond changing trends to build foundational
            market value that capture true market shifts. This practice is
            distilled from our first-hand experience scaling ventures to
            8-figures.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#contact-us-form">
              <Button btnClass="whiteBtn" label="Dominate market" />
            </Link>
            <Link href="#contact-us-form">
              <Button btnClass="transparentBtn" label="See the work" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCTA;
