import styles from "../ServiceComponent/ServiceComponent.module.scss";
import { FC } from "react";
import Typography from "../../typography/Typography";

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
          <Typography tag="h2">{title}</Typography>
          <Typography tag="p">{text}</Typography>
          <Typography tag="p">{phrase}</Typography>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
