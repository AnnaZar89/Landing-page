import { useState } from "react";
import styles from "../DigitalsBar/DigitalsBar.module.scss";
import Heading from "../../typography/Heading/Heading";
import OurPortfolioSquareElement from "../../components/OurPortfolioSquareElement/OurPortfolioSquareElement";

const digitals = [
  "All",
  "Graphic Design",
  "Mobile App",
  "Web Development",
  "Web Design",
];

const DigitalsBar = () => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.element}>
      <div className={styles.digitBar}>
        {digitals.map((digit) => (
          <div onClick={() => setValue(digit)}>
            <Heading text={digit} color="black" />
          </div>
        ))}
      </div>
      {digitals.map((digit) => {
        if (digit === "All") {
          return "";
        } else if (value === "All") {
          return (
            <div className={styles.square}>
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
            <div className={styles.square}>
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
      })}
    </div>
  );
};

export default DigitalsBar;
