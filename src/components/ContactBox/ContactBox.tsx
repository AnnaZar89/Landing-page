import { FC } from "react";
import { ContactBoxT } from "../../views/Footer/mockData";
import Heading from "../../typography/HeadingH2/HeadingH2";
import ListBox from "../ListBox/ListBox";
import List from "../List/List";
import styles from "./ContactBox.module.scss";
import cn from "classnames";

interface IContactBox {
  data: ContactBoxT[];
  text: string;
  className?: string;
}

const ContactBox: FC<IContactBox> = ({ data, text, className }) => {
  return (
    <div className={cn(styles.element, className)}>
      <Heading text={text} color="orange" />
      {data.map(({ firstItem, secondItem, icon }) => (
        <div className={styles.contactBox}>
          {icon}
          <ListBox>
            <List title={firstItem} />
            <List title={secondItem} />
          </ListBox>
        </div>
      ))}
    </div>
  );
};

export default ContactBox;
