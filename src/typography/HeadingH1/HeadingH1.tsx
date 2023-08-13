import { FC } from "react";
import styles from "../HeadingH2/HeadingH2.module.scss";
import cn from "classnames";

interface IHeadingH1 {
  text: string;
  color: "white" | "orange" | "black";
  className?: string;
  additionalText?: string;
  onClick?: any;
}

const HeadingH1: FC<IHeadingH1> = ({
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

export default HeadingH1;