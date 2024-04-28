import { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./ListBox.module.scss";

interface IListBox {
  children: ReactNode;
  className?: string;
}

const ListBox: FC<IListBox> = ({ children, className }) => {
  return <ul className={cn(styles.element)}>{children}</ul>;
};

export default ListBox;
