import { FC } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

interface IButton {
  text: string;
  classAdd?: "btnInHeader" | "btnInContent" | "popularPlan";
}

const Button: FC<IButton> = ({ classAdd, text }) => {
  return (
    <button className={cn(styles.element, styles[`hasClass-${classAdd}`])}>
      {text}
    </button>
  );
};

export default Button;
