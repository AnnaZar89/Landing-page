import { FC } from "react";
import styles from "../FeatureBox/FeatureBox.module.scss";
import Typography from "../../typography/Typography";

interface IFutureBox {
  imageFeature: string;
  content: string;
  text: string;
}
const FeatureBox: FC<IFutureBox> = ({ imageFeature, content, text }) => {
  return (
    <div className={styles.element}>
      <div className={styles.ellipseGroup}>
        <div className={styles.ellipse1}></div>
        <div className={styles.ellipse2}></div>
        <div className={styles.ellipse3}></div>
      </div>
      <div className={styles.featureContent}>
        {imageFeature}
        <Typography tag="h2">{content}</Typography>
        <Typography tag="p">{text}</Typography>
      </div>
    </div>
  );
};

export default FeatureBox;
