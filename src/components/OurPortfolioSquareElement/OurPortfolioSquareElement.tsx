import { FC } from "react";
import Heading from "../../typography/HeadingH2/HeadingH2";
import Paragraph, { SizeType } from "../../typography/Paragraph/Paragraph";
import styles from "./OurPortfolioSquareElement.module.scss";
import { setLocalDarkMode } from "../../helpers/darkMode";
import { useAppSelector } from "../../store";

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
      <Heading
        text={textInHeader}
        // color="white"
        // color={[`dark-mode`] ? "white" : "black"}
        color={darkMode ? "black" : "white"}
      />
      <Paragraph text={textInParagraph} size={SizeType.LARGE} />
    </div>
  );
};

export default OurPortfolioSquareElement;
