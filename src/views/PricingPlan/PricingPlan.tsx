import { useState } from "react";
import Heading from "../../typography/HeadingH2/HeadingH2";
import Paragraph, { SizeType } from "../../typography/Paragraph/Paragraph";
import PricingPlanBox from "../../components/PricingPlanBox/PricingPlanBox";
import styles from "./PricingPlan.module.scss";
import Container from "../../components/Container/Container";
import PeriodToggle from "../../components/PeriodToggle/PeriodToggle";

const pricingPlanData = [
  { title: "Basic Plan", sumMonthly: 39, sumYearly: 400 },
  {
    title: "Popular Plan",
    sumMonthly: 49,
    sumYearly: 550,
    classAdd: "popularPlan",
  },
  { title: "Premium Plan", sumMonthly: 99, sumYearly: 1000 },
];

const PricingPlan = () => {
  const [togglePrice, setTogglePrice] = useState("Monthly");
  const toggleButtons = ["Monthly", "Yearly"];

  const handleToggle = (period: string) => {
    setTogglePrice(period);
    console.log("period", period);
  };

  const renderPrice: Record<string, number> = {
    Monthly: 30,
    Yearly: 100,
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
      <div className={styles.toggleElement}>
        {toggleButtons.map((element) => (
          <PeriodToggle
            text={element}
            handleToggle={() => handleToggle(element)}
            activeElement={element === togglePrice}
          />
        ))}
      </div>
      <div className={styles.pricingPlanBoxContainer}>
        {pricingPlanData.map((element) => (
          <PricingPlanBox
            title={element.title}
            // sum={togglePrice ? element.sumMonthly : element.sumYearly}
            sum={renderPrice[element.title]}
            classAdd={element.classAdd}
          />
        ))}
      </div>
    </Container>
  );
};

export default PricingPlan;
