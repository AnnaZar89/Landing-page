import { FC } from "react";
import Heading from "../../typography/Heading/Heading";
import styles from "./LinkInFooter.module.scss";

// type IContact = {
//   phoneIcon?: string;
//   emailIcon?: string;
//   locationIcon?: string;
// };

interface ILinkInFooter {
  textInTitle: string;
  data?: string[];
  additionalData?: string[];

  contactBox?: (string | string[])[][];
  // contactBox?: (IContact | string[])[][];
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
          <ul className={styles.linkServicesContainer}>
            {data.map((element: string, idx) => (
              <li key={idx}>{element}</li>
            ))}
          </ul>
        )}

        {additionalData && (
          <ul className={styles.linkServicesContainer}>
            {additionalData.map((element: string, idx) => (
              <li key={idx}>{element}</li>
            ))}
          </ul>
        )}

        {contactBox && (
          <div className={styles.contactBoxContainer}>
            {contactBox.map((element: (string | string[])[], idx) => (
              <div className={styles.contactBox} key={idx}>
                {element.map((elem: any, index: number) =>
                  index === 0 ? (
                    <img src={elem} alt="Way of the contact" key={index} />
                  ) : (
                    <ul className={styles.contactListContainer} key={index}>
                      {elem.map((item: string) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
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
