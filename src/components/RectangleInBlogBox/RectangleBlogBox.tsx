import { FC, ReactNode } from "react";
import Heading from "../../typography/HeadingH2/HeadingH2";
import styles from "./RectangleBlogBox.module.scss";

interface IRectangleBlogBox {
  icon: ReactNode;
  text: string;
}

const RectangleBlogBox: FC<IRectangleBlogBox> = ({ icon, text }) => {
  return (
    <div className={styles.element}>
      {icon}
      <Heading text={text} color="white" />
    </div>
  );
};

export default RectangleBlogBox;
