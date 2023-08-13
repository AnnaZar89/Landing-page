import { FC } from "react";
import Heading from "../../typography/HeadingH2/HeadingH2";
import Paragraph from "../../typography/Paragraph/Paragraph";
import styles from "./BottomBox.module.scss";

interface IBottomBox {
  personalData: string;
  profession: string;
}

const BottomBox: FC<IBottomBox> = ({ personalData, profession }) => {
  return (
    <div className={styles.element}>
      <Heading text={personalData} color="black" />
      <Paragraph text={profession} />
    </div>
  );
};

export default BottomBox;
