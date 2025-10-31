import Link from "next/link";
import Button from "../Button/Button";
import styles from "./HomePricing.module.scss";

const pricings = [
  {
    title: "Basic",
    price: 1100,
    hoursPerMonth: 20,
    hoursPerWeek: 5,
    focusAreas: "1-2",
  },
  {
    title: "Flex",
    price: 1850,
    hoursPerMonth: 50,
    hoursPerWeek: 10,
    focusAreas: "3-5",
  },
  {
    title: "Premium",
    price: 2750,
    hoursPerMonth: 50,
    hoursPerWeek: 10,
    focusAreas: "3-5",
  },
];

const HomePricing = () => {
  return (
    <>
      <div id="pricing" className={`${styles.pricing_conatiner}`}>
        <div className={`flex flex-col gap-4 ${styles.content_wrapper}`}>
          <h2>Pricing Plan</h2>
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-10">
            {pricings.map((pricing, index) => (
              <div
                className={`flex flex-col col-span-3 md:col-span-1 gap-5 ${styles.pricing_card}`}
                key={index}
              >
                <h3 className="mx-auto">{pricing.title}</h3>
                <hr />
                <h2 className="mx-auto">
                  <sup>$</sup>
                  {pricing.price}
                  <sub>/mo</sub>
                </h2>
                <hr />
                <div className="mx-auto">
                  <p>
                    <span>{pricing.hoursPerMonth}</span> hours a month,
                  </p>
                  <p>
                    <span>{pricing.hoursPerWeek}</span> hours per week
                  </p>
                </div>
                <div className="mx-auto">
                  <p>
                    <span>{pricing.focusAreas}</span> focus areas
                  </p>
                </div>
                <div className="mx-auto">
                  <Link href="#contact-us-form">
                    <Button btnClass="filledBtn" label="Get Started" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePricing;
