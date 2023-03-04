import { FC } from "react";
import Heading from "../../typography/Heading/Heading";
import styles from "./LinkInFooter.module.scss";

interface ILinkInFooter {
  textInTitle: string;
  data: any;
  additionalData?: any;
}

const LinkInFooter: FC<ILinkInFooter> = ({
  textInTitle,
  data,
  additionalData,
}) => {
  return (
    <div className={styles.element}>
      <Heading text={textInTitle} color="orange" />
      <div className={styles.divContainer}>
        <div>
          {data.map((element: string) => (
            <Heading text={`-${element}`} color="white" />
          ))}
        </div>
        {additionalData && (
          <div>
            {additionalData.map((element: string) => (
              <Heading text={`- ${element}`} color="white" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkInFooter;
