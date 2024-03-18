import { FC, ReactNode } from "react";
import Heading from "../../typography/HeadingH2/HeadingH2";
import styles from "./RectangleBlogBox.module.scss";
import Typography from "../../typography/Typography";

interface IRectangleBlogBox {
  icon: ReactNode;
  text: string;
}

const RectangleBlogBox: FC<IRectangleBlogBox> = ({ icon, text }) => {
  return (
    <div className={styles.element}>
      {icon}
      <Typography tag="h2">{text}</Typography>
    </div>
  );
};

export default RectangleBlogBox;
