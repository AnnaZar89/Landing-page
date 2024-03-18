import { FC } from "react";
import { ContactBoxT } from "../../views/Footer/mockData";
import ListBox from "../ListBox/ListBox";
import List from "../List/List";
import styles from "./ContactBox.module.scss";
import cn from "classnames";
import Typography from "../../typography/Typography";

interface IContactBox {
  data: ContactBoxT[];
  text: string;
  className?: string;
}

const ContactBox: FC<IContactBox> = ({ data, text, className }) => {
  return (
    <div className={cn(styles.element, className)}>
      <Typography tag="h2">{text}</Typography>
      {data.map(({ firstItem, secondItem, icon }, index) => (
        <div className={styles.contactBox} key={index}>
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
