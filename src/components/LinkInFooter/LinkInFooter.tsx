import { FC } from "react";
import styles from "./LinkInFooter.module.scss";
import ListBoxContainer from "../ListBoxContainer/ListBoxContainer";
import cn from "classnames";
import Typography from "../../typography/Typography";

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
}) => {
  return (
    <div className={cn(styles.element, className)}>
      <Typography tag="h2">{title}</Typography>
      <div className={styles.container}>
        <ListBoxContainer listData={data} />
        {additionalData && <ListBoxContainer listData={additionalData} />}
      </div>
    </div>
  );
};

export default LinkInFooter;
