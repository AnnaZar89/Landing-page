import { FC } from "react";
import Heading from "../../typography/HeadingH2/HeadingH2";
import Paragraph, { SizeType } from "../../typography/Paragraph/Paragraph";
import styles from "./OurPortfolioSquareElement.module.scss";
import { setLocalDarkMode } from "../../helpers/darkMode";
import { useAppSelector } from "../../store";
import Typography from "../../typography/Typography";

interface IOurPortfolioSquareElement {
  textInHeader: string;
  textInParagraph: string;
}

const OurPortfolioSquareElement: FC<IOurPortfolioSquareElement> = ({
  textInHeader,
  textInParagraph,
}) => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  return (
    <div className={styles.element}>
      {/* <Typography tag="h2" className={darkMode ? styles.dark : styles.light}> */}
      <Typography tag="h2">{textInHeader}</Typography>
      <Typography tag="p">{textInParagraph}</Typography>
      {/* <Paragraph text={textInParagraph} size={SizeType.LARGE} /> */}
    </div>
  );
};

export default OurPortfolioSquareElement;
