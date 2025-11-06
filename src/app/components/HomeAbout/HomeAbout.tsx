import styles from "./HomeAbout.module.scss";

const HomeAbout = () => {
  return (
    <>
      <div id="about" className={`${styles.about_conatiner}`}>
        <div className={`flex flex-col gap-4 ${styles.content_wrapper}`}>
          <h2>About Our Agency</h2>
          <p className={`${styles.description_para}`}>
            Axis & Matter is predicated on a core conviction: the most resonant
            ideas are born at the epicenter of due diligence and unique angles.
            We operate as an impetus for visionary brands, transforming
            ambitious goals into market-defining realities.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
