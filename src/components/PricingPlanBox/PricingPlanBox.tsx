import styles from "./PricingPlanBox.module.scss";
import Button from "../Button/Button";
import Heading from "../../typography/HeadingH2/HeadingH2";
import { FC } from "react";
import cn from "classnames";
import ListBoxContainer from "../ListBoxContainer/ListBoxContainer";
import { ReactComponent as Check } from "../../assets/icons/check-list.svg";
import Typography from "../../typography/Typography";

interface IPricingPlanBox {
  title: string;
  sum: number;
  // sum: string;
  className?: string;
  classAdd?: string;
}

const listData: string[] = [
  "Customer Management",
  "Web Design",
  "UI/UX",
  "SEO Merketing",
  "24/7 Support",
  "Business Analysis",
];

const PricingPlanBox: FC<IPricingPlanBox> = ({
  title,
  sum,
  className,
  classAdd,
}) => {
  return (
    <div className={cn(styles.element, styles[`hasClass-${classAdd}`])}>
      <div className={cn(styles.ellipse)}>
        <Typography tag="h2">{title}</Typography>
        <div className={cn(styles.price)}>
          <Typography tag="h2">$</Typography>
          <Typography tag="h2">{sum}</Typography>
        </div>
      </div>
      <ListBoxContainer listData={listData} icon={<Check />} />
      <Button text="Buy Now" classAdd="pricingPlanButton" />
    </div>
  );
};

export default PricingPlanBox;
