import { FC } from "react";
import Heading from "../../typography/Heading/Heading";
import styles from "./QuickLink.module.scss";

interface IQuickLink {
  textInTitle: string;
  data: any;
  additionalData?: any;
}

const QuickLink: FC<IQuickLink> = ({ textInTitle, data, additionalData }) => {
  return (
    <div className={styles.element}>
      <Heading text={textInTitle} color="orange" />
      <div className={styles.divContainer}>
        <div>
          {data.map((element: string) => (
            <Heading text={`-${element}`} color="white" />
          ))}
        </div>
        <div>
          {additionalData.map((element: string) => (
            <Heading text={`- ${element}`} color="white" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLink;
