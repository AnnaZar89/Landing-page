import styles from "./Paragraph.module.scss";
import { FC } from "react";
import cn from "classnames";

export enum SizeType {
  SMALL = "small",
  MEDIUM = "medium",
  STANDARD = "standard",
  LARGE = "large",
  EXTRA_LARGE = "extraLarge",
  EXTRA_Extra_LARGE = "extraExtraLarge",
}

interface IParagraph {
  text: string;
  size?: SizeType;
  variant?: "regular" | "semiBold" | "bold";
}

const Paragraph: FC<IParagraph> = ({ text, size, variant = "regular" }) => {
  return (
    <p
      className={cn(
        styles.element,
        styles[`hasSize-${size}`],
        styles[`hasVariant-${variant}`]
      )}
    >
      {text}
    </p>
  );
};

export default Paragraph;
