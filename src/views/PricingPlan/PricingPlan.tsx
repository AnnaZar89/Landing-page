import { useState } from "react";
import Heading from "../../typography/HeadingH2/HeadingH2";
import Paragraph, { SizeType } from "../../typography/Paragraph/Paragraph";
import PricingPlanBox from "../../components/PricingPlanBox/PricingPlanBox";
import styles from "./PricingPlan.module.scss";
import Container from "../../components/Container/Container";
import PeriodToggle from "../../components/PeriodToggle/PeriodToggle";

type PriceDate = {
  title: string;
  sumMonthly: number;
  sumYearly: number;
  sumDaily: number;
  period: "Monthly" | "Yearly" | "Daily";
};

const pricingPlanData: PriceDate[] = [
  {
    title: "Basic Plan",
    sumMonthly: 39,
    sumYearly: 400,
    sumDaily: 5,
    period: "Monthly",
  },
  {
    title: "Popular Plan",
    sumMonthly: 49,
    sumYearly: 550,
    sumDaily: 5,
    period: "Monthly",
  },
  {
    title: "Premium Plan",
    sumMonthly: 99,
    sumYearly: 1000,
    sumDaily: 5,
    period: "Yearly",
  },
];

const PricingPlan = () => {
  const [togglePrice, setTogglePrice] = useState("Monthly");
  const toggleButtons = ["Monthly", "Yearly", "Daily"];

  const handleToggle = (period: string) => {
    setTogglePrice(period);
    console.log("period", period);
  };

  // const renderPrice: Record<string, number> = {
  //   Monthly: 30,
  //   Yearly: 100,
  // };

  const renderPrice = (data: PriceDate) => {
    const price: Record<string, number> = {
      Monthly: data.sumMonthly,
      Yearly: data.sumYearly,
      Daily: data.sumDaily,
    };
    return price[togglePrice];
  };

  // const renderPrice = (data: PriceDate) => {
  //   switch (togglePrice) {
  //     case "Monthly": {
  //       return data.sumMonthly;
  //     }
  //     case "Yearly": {
  //       return data.sumYearly;
  //     }
  //     case "Daily": {
  //       return data.sumDaily;
  //     }
  //     default: {
  //       return 0;
  //     }
  //   }
  // };

  // const test = (data: PriceDate): number => {
  //   if (togglePrice === "Monthly") {
  //     return data.sumMonthly;
  //   } else if (togglePrice === "Yearly") {
  //     return data.sumYearly;
  //   } else if (togglePrice === "Daily") {
  //     return data.sumDaily;
  //   }
  //   return 0;
  // };

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
            // activeElement={togglePrice}
          />
        ))}
      </div>
      <div className={styles.pricingPlanBoxContainer}>
        {pricingPlanData.map((element) => (
          <PricingPlanBox title={element.title} sum={renderPrice(element)} />
        ))}
      </div>
    </Container>
  );
};

export default PricingPlan;
