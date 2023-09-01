import { FC, ReactNode } from "react";
import { ReactComponent as Check } from "../../assets/icons/check-list.svg";
import { ContactBoxT } from "../../views/Footer/mockData";

interface IList {
  title?: string;
  icon?: ReactNode;
}
const List: FC<IList> = ({ title, icon }) => {
  return (
    <li>
      {icon}
      {title}
    </li>
  );
};

export default List;
