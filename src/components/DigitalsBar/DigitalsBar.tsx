import { ReactNode, useState } from "react";
import styles from "../DigitalsBar/DigitalsBar.module.scss";
import Heading from "../../typography/HeadingH2/HeadingH2";
import OurPortfolioSquareElement from "../../components/OurPortfolioSquareElement/OurPortfolioSquareElement";
// import Paragraph from "../../typography/Paragraph/Paragraph";

enum DigitalValueType {
  ALL = "All",
  GRAPHIC_DESIGN = "Graphic Design",
  MOBILE_APP = "Mobile App",
  WEB_DEVELOPMENT = "Web Development",
  WEB_DESIGN = "Web Design",
}

type DigitalType = {
  name: string;
  value: DigitalValueType;
};

const digitalsTitle: DigitalType[] = [
  { name: "All", value: DigitalValueType.ALL },
  { name: "Graphic Design", value: DigitalValueType.GRAPHIC_DESIGN },
  { name: "Mobile App", value: DigitalValueType.MOBILE_APP },
  { name: "Web Development", value: DigitalValueType.WEB_DEVELOPMENT },
  { name: "Web Design", value: DigitalValueType.WEB_DESIGN },
];

const DigitalsBar = () => {
  const [digitalValue, setDigitalValue] = useState<DigitalValueType>(
    DigitalValueType.ALL
  );
  const displayBox: Record<DigitalValueType, ReactNode> = {
    [DigitalValueType.ALL]: digitalsTitle
      .filter((element) => element.name !== "All")
      .map((element, index) => (
        <div className={styles.square} key={index}>
          <OurPortfolioSquareElement
            textInHeader={element.name}
            textInParagraph={element.name}
          />
          <OurPortfolioSquareElement
            textInHeader={element.name}
            textInParagraph={element.name}
          />
          <OurPortfolioSquareElement
            textInHeader={element.name}
            textInParagraph={element.name}
          />
        </div>
      )),
    [DigitalValueType.GRAPHIC_DESIGN]: (
      <div className={styles.square}>
        <OurPortfolioSquareElement
          textInHeader={digitalValue}
          textInParagraph={digitalValue}
        />{" "}
        <OurPortfolioSquareElement
          textInHeader={digitalValue}
          textInParagraph={digitalValue}
        />{" "}
        <OurPortfolioSquareElement
          textInHeader={digitalValue}
          textInParagraph={digitalValue}
        />{" "}
      </div>
    ),
    [DigitalValueType.MOBILE_APP]: (
      <div className={styles.square}>
        <OurPortfolioSquareElement
          textInHeader={digitalValue}
          textInParagraph={digitalValue}
        />{" "}
        <OurPortfolioSquareElement
          textInHeader={digitalValue}
          textInParagraph={digitalValue}
        />{" "}
        <OurPortfolioSquareElement
          textInHeader={digitalValue}
          textInParagraph={digitalValue}
        />{" "}
      </div>
    ),
    [DigitalValueType.WEB_DEVELOPMENT]: (
      <div className={styles.square}>
        <OurPortfolioSquareElement
          textInHeader={digitalValue}
          textInParagraph={digitalValue}
        />{" "}
        <OurPortfolioSquareElement
          textInHeader={digitalValue}
          textInParagraph={digitalValue}
        />{" "}
        <OurPortfolioSquareElement
          textInHeader={digitalValue}
          textInParagraph={digitalValue}
        />{" "}
      </div>
    ),
    [DigitalValueType.WEB_DESIGN]: (
      <div className={styles.square}>
        <OurPortfolioSquareElement
          textInHeader={digitalValue}
          textInParagraph={digitalValue}
        />{" "}
        <OurPortfolioSquareElement
          textInHeader={digitalValue}
          textInParagraph={digitalValue}
        />{" "}
        <OurPortfolioSquareElement
          textInHeader={digitalValue}
          textInParagraph={digitalValue}
        />{" "}
      </div>
    ),
  };

  return (
    <div className={styles.element}>
      <div className={styles.digitBar}>
        {digitalsTitle.map(({ name, value }, index) => (
          <div
            onClick={() => setDigitalValue(value)}
            key={index}
            className={digitalValue === value ? styles.active : ""}
          >
            {/* <Heading text={name} color="black" /> */}
            <Heading text={name} color="black" />
          </div>
        ))}
      </div>
      {displayBox[digitalValue]}
      {/* {digitals.map((digit, idx) => {
        if (digit === "All") {
          return "";
        } else if (value === "All") {
          return (
            <div className={styles.square} key={idx}>
              <OurPortfolioSquareElement
                textInHeader={digit}
                textInParagraph={digit}
              />
              <OurPortfolioSquareElement
                textInHeader={digit}
                textInParagraph={digit}
              />
              <OurPortfolioSquareElement
                textInHeader={digit}
                textInParagraph={digit}
              />
            </div>
          );
        } else if (value === digit) {
          return (
            <div className={styles.square} key={idx}>
              <OurPortfolioSquareElement
                textInHeader={digit}
                textInParagraph={digit}
              />
              <OurPortfolioSquareElement
                textInHeader={digit}
                textInParagraph={digit}
              />
              <OurPortfolioSquareElement
                textInHeader={digit}
                textInParagraph={digit}
              />
            </div>
          );
        }
      })} */}
    </div>
  );
};

export default DigitalsBar;
