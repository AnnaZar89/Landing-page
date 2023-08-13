import { FC, ReactNode } from "react";
import styles from "./IconBox.module.scss";

interface IIconBox {
  children: ReactNode;
}
const IconBox: FC<IIconBox> = ({ children }) => {
  return <div className={styles.element}>{children}</div>;
};

export default IconBox;
