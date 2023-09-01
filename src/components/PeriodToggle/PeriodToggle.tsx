import { FC } from "react";
import cn from "classnames";
import styles from "./PeriodToggle.module.scss";

interface IPeriodToggle {
  toggle?: boolean;
  handleToggle?: React.MouseEventHandler<HTMLElement>;
  period: string;
}
const PeriodToggle: FC<IPeriodToggle> = ({ toggle, handleToggle, period }) => {
  return (
    <div
      onClick={handleToggle}
      className={cn(styles.element, styles[`${toggle ? "on" : "off"}`])}
    >
      {period && <h2>{period}</h2>}
    </div>
  );
};

export default PeriodToggle;
