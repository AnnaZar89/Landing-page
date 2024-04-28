import { FC, ReactNode } from "react";
import ListBox from "../ListBox/ListBox";
import List from "../List/List";

interface IListBoxData {
  listData: string[];
  className?: string;
  icon?: ReactNode;
}

const ListBoxContainer: FC<IListBoxData> = ({ listData, className, icon }) => {
  return (
    <ListBox>
      {listData.map((list, index) => (
        <List title={list} icon={icon} key={index} />
      ))}
    </ListBox>
  );
};

export default ListBoxContainer;
