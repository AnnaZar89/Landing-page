import { FC, ReactNode } from "react";

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
