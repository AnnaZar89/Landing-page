import { FC } from "react";
import styles from "./OurPortfolioSquareElement.module.scss";
import Typography from "../../typography/Typography";

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
      <Typography tag="h2">{textInHeader}</Typography>
      <Typography tag="p">{textInParagraph}</Typography>
    </div>
  );
};

export default OurPortfolioSquareElement;
