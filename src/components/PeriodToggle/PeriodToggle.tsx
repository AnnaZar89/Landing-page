import { FC } from "react";
import cn from "classnames";
import styles from "./PeriodToggle.module.scss";

interface IPeriodToggle {
  text: string;
  handleToggle: () => void;
  activeElement: boolean;
}

const PeriodToggle: FC<IPeriodToggle> = ({
  text,
  handleToggle,
  activeElement,
}) => {
  return (
    <div
      onClick={handleToggle}
      className={cn(styles.element, styles[`${activeElement ? "on" : "off"}`])}
    >
      {text}
    </div>
  );
};

export default PeriodToggle;
