import { FC } from "react";
import cn from "classnames";
import styles from "./PayingPeriodBox.module.scss";

interface IPayingPeriodBox {
  toggle: boolean;
  handleToggle: React.MouseEventHandler<HTMLElement>;
  yearlyOrMonthly: string;
}
const PayingPeriodBox: FC<IPayingPeriodBox> = ({
  toggle,
  handleToggle,
  yearlyOrMonthly,
}) => {
  return (
    <div
      onClick={handleToggle}
      className={cn(styles.element, styles[`${toggle ? "on" : "off"}`])}
    >
      {yearlyOrMonthly && <h1>{yearlyOrMonthly}</h1>}
    </div>
  );
};

export default PayingPeriodBox;
