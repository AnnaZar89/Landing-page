import { FC } from "react";
import styles from "./ListBoxContainer.module.scss";
import ListBox from "../ListBox/ListBox";
import List from "../List/List";
import { ContactBoxT } from "../../views/Footer/mockData";

interface IListBoxData {
  listData: string[] | ContactBoxT[];
  classAdd?: "popularPlan";
  Icon?: React.FunctionComponent;
}

//Pytanie: korzystam z ListBox w Footer, ale nie robie mapa; czy w Footer powinnam użyć listData?
const ListBoxContainer: FC<IListBoxData> = ({ listData, classAdd, Icon }) => {
  return (
    <ListBox classAdd={classAdd}>
      {listData.map((data) => (
        <List data={data} Icon={Icon} />
      ))}
    </ListBox>
  );
};

export default ListBoxContainer;
