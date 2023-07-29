import { FC, ReactNode } from "react";
import cn from "classnames";
// import { ReactComponent as Check } from "../../assets/icons/check-list.svg";
import styles from "./ListBox.module.scss";

interface IListBox {
  //   listData: string[];
  //   classAdd?: "popularPlan";
  children: ReactNode;
  classAdd?: "popularPlan";
}

const ListBox: FC<IListBox> = ({ children, classAdd }) => {
  return (
    // <ul className={cn(styles.element, styles[`hasClass-${classAdd}`])}>
    <ul className={cn(styles.element, styles[`hasClass-${classAdd}`])}>
      {children}
    </ul>
    // <ul className={cn(styles.element, styles[`hasClass-${classAdd}`])}>
    //   {listData.map((data, idx) => (
    //     <li key={idx}>
    //       <Check />
    //       {data}
    //     </li>
    //   ))}
    // </ul>
  );
};

export default ListBox;
