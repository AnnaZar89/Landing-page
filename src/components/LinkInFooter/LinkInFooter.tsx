import { FC } from "react";
import Heading from "../../typography/Heading/Heading";
import styles from "./LinkInFooter.module.scss";

interface ILinkInFooter {
  textInTitle: string;
  data?: string[];
  additionalData?: string[];

  contactBox?: any;
  // contactBox?: (string | string[])[];
}

const LinkInFooter: FC<ILinkInFooter> = ({
  textInTitle,
  data,
  additionalData,
  contactBox,
}) => {
  return (
    <div className={styles.element}>
      <Heading text={textInTitle} color="orange" />

      <div className={styles.divContainer}>
        {data && (
          <div>
            {data.map((element: string) => (
              <Heading text={`-${element}`} color="white" />
            ))}
          </div>
        )}

        {additionalData && (
          <div>
            {additionalData.map((element: string) => (
              <Heading text={`- ${element}`} color="white" />
            ))}
          </div>
        )}

        {contactBox && (
          <div className={styles.contactBoxContainer}>
            {contactBox.map((element: any) => (
              <div className={styles.contactBox}>
                {element.map((elem: any, idx: any) =>
                  idx === 0 ? (
                    <img src={elem} />
                  ) : (
                    <div>
                      {elem.map((item: any) => (
                        <Heading text={item} color="white" />
                      ))}
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkInFooter;
