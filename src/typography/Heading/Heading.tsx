import { FC } from "react";
import styles from "./Heading.module.scss";
import cn from "classnames";

interface IHeading {
  text: string;
  color: "white" | "orange" | "black";
  className?: string;
  additionalText?: string;
  onClick?: any;
}

const Heading: FC<IHeading> = ({
  text,
  className,
  color = "white",
  additionalText,
}) => {
  return (
    <>
      <h1
        className={cn(styles.element, className, styles[`hasColor-${color}`])}
      >
        {text}
      </h1>

      {additionalText && (
        <h1 className={cn(styles.element, styles.additionalText)}>
          {additionalText}
        </h1>
      )}
    </>
  );
};

export default Heading;
