import { FC, ReactNode } from "react";
import styles from "./Container.module.scss";
import cn from "classnames";

interface IContainer {
  children: ReactNode;
  className?: string;
}

const Container: FC<IContainer> = ({ children, className }) => {
  return <div className={cn(styles.element, className)}>{children}</div>;
};

export default Container;
