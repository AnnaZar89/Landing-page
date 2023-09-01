import styles from "./PricingPlanBox.module.scss";
import Button from "../Button/Button";
import Heading from "../../typography/HeadingH2/HeadingH2";
import { FC } from "react";
import cn from "classnames";
import ListBoxContainer from "../ListBoxContainer/ListBoxContainer";
import { ReactComponent as Check } from "../../assets/icons/check-list.svg";

interface IPricingPlanBox {
  title: string;
  sum: string;
  className?: string;
}

const listData: string[] = [
  "Customer Management",
  "Web Design",
  "UI/UX",
  "SEO Merketing",
  "24/7 Support",
  "Business Analysis",
];

const PricingPlanBox: FC<IPricingPlanBox> = ({ title, sum, className }) => {
  return (
    <div className={cn(styles.element, className)}>
      <div className={cn(styles.ellipse)}>
        <Heading text={title} color="black" />
        <div className={cn(styles.price)}>
          <Heading text="$" color="black" additionalText={sum} />
        </div>
      </div>
      <ListBoxContainer listData={listData} icon={<Check />} />
      <Button text="Buy Now" />
    </div>
  );
};

export default PricingPlanBox;
