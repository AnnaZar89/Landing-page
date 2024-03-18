import { useState } from "react";
import PricingPlanBox from "../../components/PricingPlanBox/PricingPlanBox";
import styles from "./PricingPlan.module.scss";
import Container from "../../components/Container/Container";
import PeriodToggle from "../../components/PeriodToggle/PeriodToggle";
import Typography from "../../typography/Typography";

type PriceDate = {
  title: string;
  sumMonthly: number;
  sumYearly: number;
  sumDaily: number;
  period: "Monthly" | "Yearly";
  classAdd?: string;
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
    classAdd: "popularPlan",
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
  const toggleButtons = ["Monthly", "Yearly"];

  const handleToggle = (period: string) => {
    setTogglePrice(period);
    console.log("period", period);
  };

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
        <Typography tag="h3">Pricing Plan</Typography>
        <Typography tag="h2">Purches Our Pricing Plan</Typography>
        <Typography tag="p">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't
        </Typography>
      </div>
      <div className={styles.toggleElement}>
        {toggleButtons.map((element, index) => (
          <PeriodToggle
            text={element}
            handleToggle={() => handleToggle(element)}
            activeElement={element === togglePrice}
            key={index}
          />
        ))}
      </div>
      <div className={styles.pricingPlanBoxContainer}>
        {pricingPlanData.map((element, index) => (
          <PricingPlanBox
            title={element.title}
            sum={renderPrice(element)}
            classAdd={element.classAdd}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default PricingPlan;
