import { FC } from "react";
import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";
import styles from "../FeatureBox/FeatureBox.module.scss";

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
        {/* <img src={imageFeature} alt="image" className={styles.imgFeature} /> */}
        <Heading text={content} color="black" />
        <Paragraph text={text} />
      </div>
    </div>
  );
};

export default FeatureBox;
