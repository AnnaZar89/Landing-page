import { useState } from "react";

import Heading from "../../typography/HeadingH2/HeadingH2";
import Paragraph, { SizeType } from "../../typography/Paragraph/Paragraph";
import PayingPeriodBox from "../../components/PeriodToggle/PeriodToggle";
import PricingPlanBox from "../../components/PricingPlanBox/PricingPlanBox";
import styles from "./PricingPlan.module.scss";
import Container from "../../components/Container/Container";
// import PeriodToggle from "../../components/Toggle/Toggle";
import PeriodToggle from "../../components/PeriodToggle/PeriodToggle";

const toggleButtons = ["Monthly", "Yearly"];
const PricingPlan = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container className={styles.container}>
      <div className={styles.textContainer}>
        <Paragraph
          text="Pricing Plan"
          size={SizeType.LARGE}
          variant="semiBold"
        />
        <Heading text="Purches Our Pricing Plan" color="black" />
        <Paragraph
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't"
          size={SizeType.MEDIUM}
        />
      </div>
      <div className={styles.oblong} onClick={handleToggle}>
        {toggleButtons.map((element) => (
          <PeriodToggle
            period={element}
            toggle={toggle}
            handleToggle={handleToggle}
          />
        ))}
      </div>
      <div className={styles.pricingPlanBoxContainer}>
        <PricingPlanBox title="Basic Plan" sum="39" />
        <PricingPlanBox
          title="Popular Plan"
          sum="49"
          className={styles.popularPlan}
        />
        <PricingPlanBox title="Premium Plan" sum="99" />
      </div>
    </Container>
  );
};

export default PricingPlan;
