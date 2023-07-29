import { FC } from "react";
import Heading from "../../typography/Heading/Heading";
import Paragraph, { SizeType } from "../../typography/Paragraph/Paragraph";
import styles from "./OurPortfolioSquareElement.module.scss";

interface IOurPortfolioSquareElement {
  textInHeader: string;
  textInParagraph: string;
}

const OurPortfolioSquareElement: FC<IOurPortfolioSquareElement> = ({
  textInHeader,
  textInParagraph,
}) => {
  return (
    <div className={styles.element}>
      <Heading text={textInHeader} color="white" />
      <Paragraph text={textInParagraph} size={SizeType.LARGE} />
    </div>
  );
};

export default OurPortfolioSquareElement;
