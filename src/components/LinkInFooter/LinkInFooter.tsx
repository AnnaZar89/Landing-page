import { FC } from "react";
import Heading from "../../typography/HeadingH2/HeadingH2";
import styles from "./LinkInFooter.module.scss";
import ListBoxContainer from "../ListBoxContainer/ListBoxContainer";
import cn from "classnames";

interface ILinkInFooter {
  title: string;
  data: string[];
  additionalData?: string[];
  className?: string;
}

const LinkInFooter: FC<ILinkInFooter> = ({
  title,
  data,
  additionalData,
  className,
  // contactData,
}) => {
  console.log(data, "data");
  return (
    <div className={cn(styles.element, className)}>
      <Heading text={title} color="orange" />
      <div className={styles.container}>
        <ListBoxContainer listData={data} />
        {additionalData && <ListBoxContainer listData={additionalData} />}
      </div>
    </div>
  );
};

export default LinkInFooter;

//zakomentowane: 4/05
// interface IListBox {
//   data: string[];
// }
// const ListBox: FC<IListBox> = ({ data }) => {
//   return (
//     <ul>
//       <li>{data}</li>
//     </ul>
//   );
// };
