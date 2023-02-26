import { FC, ReactNode } from "react";
import styles from "./CircleBox.module.scss";

interface ICircleBox {
  children: ReactNode | string;
}

const CircleBox: FC<ICircleBox> = ({ children }) => {
  return (
    <>
      <div className={styles.element}>{children}</div>
    </>
  );
};

export default CircleBox;
