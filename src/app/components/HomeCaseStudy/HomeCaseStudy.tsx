import Image from "next/image";
import Arrow from "../../public/assets/images/arrow-am.svg";
import CaseStudy from "../../public/assets/images/case-study-bg-am.png";
import styles from "./HomeCaseStudy.module.scss";

const HomeCaseStudy = () => {
  return (
    <>
      <div id="case-studies" className={`${styles.case_study_conatiner}`}>
        <div
          className={`grid grid-cols-2 gap-8 md:gap-24 ${styles.content_wrapper}`}
        >
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2 md:gap-8">
            <div className="flex flex-col gap-4 md:gap-24">
              <h2>Case Study:</h2>
              <h3 className={`${styles.description_para}`}>
                Building a Strong Digital Identity
              </h3>
            </div>
            <p className="text-gray-600">
              We transformed disparate digital presence by doing a comprehensive
              visual reconstruct.{" "}
            </p>
          </div>
          <div className="relative col-span-2 md:col-span-1">
            <Image
              src={CaseStudy}
              alt="case study"
              className={styles.image_container}
            />
            <button className={styles.explore_btn}>
              Explore
              <span className={styles.arrow}>
                <Image src={Arrow} alt="arrow" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCaseStudy;
