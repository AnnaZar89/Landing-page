import styles from "./PricingPlanBox.module.scss";
import Button from "../Button/Button";
import Heading from "../../typography/Heading/Heading";
import { FC } from "react";
import cn from "classnames";
import ListBoxContainer from "../ListBoxContainer/ListBoxContainer";
import { ReactComponent as Check } from "../../assets/icons/check-list.svg";

interface IPricingPlanBox {
  sortOfPlan: string;
  sum: string;
  classAdd?: "popularPlan";
}

const PricingPlanBox: FC<IPricingPlanBox> = ({ sortOfPlan, sum, classAdd }) => {
  return (
    <div className={cn(styles.element, styles[`hasClass-${classAdd}`])}>
      <div className={cn(styles.ellipse, styles[`hasClass-${classAdd}`])}>
        <Heading text={sortOfPlan} color="black" />
        <div className={cn(styles.price, styles[`hasClass-${classAdd}`])}>
          <Heading text="$" color="black" additionalText={sum} />
        </div>
      </div>
      <ListBoxContainer
        classAdd={classAdd}
        listData={[
          "Customer Management",
          "Web Design",
          "UI/UX",
          "SEO Merketing",
          "24/7 Support",
          "Business Analysis",
        ]}
        Icon={Check}
      />
      <Button text="Buy Now" classAdd={classAdd} />
    </div>
  );
};

export default PricingPlanBox;
