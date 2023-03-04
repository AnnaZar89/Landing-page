import { FC, ReactNode } from "react";
import Heading from "../../typography/Heading/Heading";
import styles from "./RectangleBlogBoxDown.module.scss";

interface IRectangleBlogBoxDown {
  icon: ReactNode;
  text: string;
}

const RectangleBlogBoxDown: FC<IRectangleBlogBoxDown> = ({ icon, text }) => {
  return (
    <div className={styles.element}>
      {icon}
      <Heading text={text} color="white" />
    </div>
  );
};

export default RectangleBlogBoxDown;
