import { FC, ReactElement } from "react";
import cn from "classnames";
import Heading from "../../typography/Heading/Heading";
import styles from "../Oblong/Oblong.module.scss";
import Paragraph from "../../typography/Paragraph/Paragraph";

interface IOblong {
  personalData?: string;
  profession?: string;
  toggle?: boolean;
  handleToggle?: React.MouseEventHandler<HTMLElement>;
  yearlyOrMonthly: string;
}

const Oblong: FC<IOblong> = ({
  personalData,
  profession,
  toggle,
  handleToggle,
  yearlyOrMonthly,
}) => {
  return (
    <div
      onClick={handleToggle}
      className={cn(styles.rectangle, styles[`${toggle ? "on" : "off"}`])}
    >
      {yearlyOrMonthly && <h1>{yearlyOrMonthly}</h1>}
      {personalData && <Heading text={personalData} color="black" />}
      {profession && <Paragraph text={profession} />}
    </div>
  );
};

export default Oblong;
