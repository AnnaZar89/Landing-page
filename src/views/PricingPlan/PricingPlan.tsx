import { useState } from "react";

import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";
import PayingPeriodBox from "../../components/PayingPeriodBox/PayingPeriodBox";
import PricingPlanBox from "../../components/PricingPlanBox/PricingPlanBox";
import styles from "./PricingPlan.module.scss";

const PricingPlan = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className={styles.element}>
      <div className={styles.textContainer}>
        <Heading text="pricing plan" color="orange" />
        <Heading text="Purches Our Pricing Plan" color="black" />
        <Paragraph text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't" />
      </div>
      <div className={styles.oblong} onClick={handleToggle}>
        <PayingPeriodBox
          yearlyOrMonthly="Monthly"
          toggle={toggle}
          handleToggle={handleToggle}
        />
        <PayingPeriodBox
          yearlyOrMonthly="Yearly"
          toggle={!toggle}
          handleToggle={handleToggle}
        />
      </div>
      <div className={styles.pricingPlanBoxContainer}>
        <PricingPlanBox sortOfPlan="Basic Plan" sum="39" />
        <PricingPlanBox
          sortOfPlan="Popular Plan"
          sum="49"
          classAdd="popularPlan"
        />
        <PricingPlanBox sortOfPlan="Premium Plan" sum="99" />
      </div>
    </div>
  );
};

export default PricingPlan;
