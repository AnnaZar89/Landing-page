import { useState } from "react";

import Heading from "../../typography/Heading/Heading";
import Paragraph, { SizeType } from "../../typography/Paragraph/Paragraph";
import PayingPeriodBox from "../../components/PayingPeriodBox/PayingPeriodBox";
import PricingPlanBox from "../../components/PricingPlanBox/PricingPlanBox";
import styles from "./PricingPlan.module.scss";
import Container from "../../components/Container/Container";

const PricingPlan = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container className={styles.container}>
      <div className={styles.textContainer}>
        {/* <Heading text="pricing plan" color="orange" /> */}
        <Paragraph
        text="Pricing Plan" size={SizeType.LARGE}
        variant="semiBold"
      />
        <Heading text="Purches Our Pricing Plan" color="black" />
        <Paragraph
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't"
          size={SizeType.MEDIUM}
        />
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
    </Container>
  );
};

export default PricingPlan;
