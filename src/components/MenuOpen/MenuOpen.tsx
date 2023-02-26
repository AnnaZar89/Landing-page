import styles from "./MenuOpen.module.scss";
import { FC } from "react";

export interface IMenuOpen {
  style?: React.CSSProperties;
}

const MenuOpen: FC<IMenuOpen> = ({ style }) => {
  return <div className={styles.element} style={style}></div>;
};

export default MenuOpen;
