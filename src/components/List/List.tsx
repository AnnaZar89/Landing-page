import { FC } from "react";
import { ReactComponent as Check } from "../../assets/icons/check-list.svg";
import styles from "./List.module.scss";
import cn from "classnames";

interface IListData {
  listData: string[];
  classAdd?: "popularPlan";
}

const List: FC<IListData> = ({ listData, classAdd }) => {
  return (
    <ul className={cn(styles.elementList, styles[`hasClass-${classAdd}`])}>
      {listData.map((data, idx) => (
        <li key={idx}>
          {/* <i className="fas fa-check-circle"></i> */}
          <Check />
          {data}
        </li>
      ))}
    </ul>
  );
};

export default List;
