import { FC, ReactNode } from "react";
import styles from "./ListBoxContainer.module.scss";
import ListBox from "../ListBox/ListBox";
import List from "../List/List";
import { ContactBoxT } from "../../views/Footer/mockData";

interface IListBoxData {
  listData: string[];
  className?: string;
  icon?: ReactNode;
}

const ListBoxContainer: FC<IListBoxData> = ({ listData, className, icon }) => {
  return (
    <ListBox className="className">
      {listData.map((list) => (
        <List title={list} icon={icon} />
      ))}
    </ListBox>
  );
};

export default ListBoxContainer;
