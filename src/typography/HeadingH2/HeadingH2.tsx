import { FC } from "react";
import styles from "./HeadingH2.module.scss";
import cn from "classnames";
import { Typography } from "@mui/material";

interface IHeadingH2 {
  text: string;
  color: "white" | "orange" | "black";
  className?: string;
  additionalText?: string | number;
  variant?: any;
  // onClick?: any;
}

const HeadingH2: FC<IHeadingH2> = ({
  text,
  className,
  color = "white",
  additionalText,
  variant,
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

      {/* <Typography
        className={cn(styles.element, className, styles[`hasColor-${color}`])}
      >
        {text}
      </Typography>

      {additionalText && (
        <Typography
          className={cn(styles.element, styles.additionalText)}
          variant={variant}
        >
          {additionalText}
        </Typography>
      )} */}
    </>
  );
};

export default HeadingH2;
