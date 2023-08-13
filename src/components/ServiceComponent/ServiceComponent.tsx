import styles from "../ServiceComponent/ServiceComponent.module.scss";
import { FC } from "react";
import Heading from "../../typography/HeadingH2/HeadingH2";
import Paragraph, { SizeType } from "../../typography/Paragraph/Paragraph";

interface IServiceComponent {
  number: string;
  icon: string;
  title: string;
  text: string;
  phrase: string;
}

const ServiceComponent: FC<IServiceComponent> = ({
  number,
  icon,
  title,
  text,
  phrase,
}) => {
  return (
    <div className={styles.element}>
      <div className={styles.ellipse}>
        <div className={styles.number}>{number}</div>
      </div>

      <div className={styles.rectangleAndTxt}>
        <div>{icon}</div>

        <div className={styles.txt}>
          <Heading text={title} color="black" />
          <Paragraph text={text} size={SizeType.MEDIUM} />
          <Paragraph text={phrase} />
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
