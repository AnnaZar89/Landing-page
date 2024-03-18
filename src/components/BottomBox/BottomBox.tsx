import { FC } from "react";
import Heading from "../../typography/HeadingH2/HeadingH2";
import Paragraph from "../../typography/Paragraph/Paragraph";
import styles from "./BottomBox.module.scss";
import Typography from "../../typography/Typography";

interface IBottomBox {
  personalData: string;
  profession: string;
}

const BottomBox: FC<IBottomBox> = ({ personalData, profession }) => {
  return (
    <div className={styles.element}>
      <Typography tag="h2">{personalData}</Typography>
      <Typography tag="p">{profession}</Typography>
    </div>
  );
};

export default BottomBox;
