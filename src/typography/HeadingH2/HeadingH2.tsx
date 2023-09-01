import { FC } from "react";
import styles from "./HeadingH2.module.scss";
import cn from "classnames";

interface IHeadingH2 {
  text: string;
  color: "white" | "orange" | "black";
  className?: string;
  additionalText?: string;
  // onClick?: any;
}

const HeadingH2: FC<IHeadingH2> = ({
  text,
  className,
  color = "white",
  additionalText,
}) => {
  return (
    <>
      <h2
        className={cn(styles.element, className, styles[`hasColor-${color}`])}
      >
        {text}
      </h2>

      {additionalText && (
        <h2 className={cn(styles.element, styles.additionalText)}>
          {additionalText}
        </h2>
      )}
    </>
  );
};

export default HeadingH2;
