import styles from "../OurPortfolio/OurPortfolio.module.scss";
import DigitalsBar from "../../components/DigitalsBar/DigitalsBar";
import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";
import DivElement from "../../components/SquareElement/SquareElement";

const OurPortfolio = () => {
  return (
    <div className={styles.element}>
      <div className={styles.textContainer}>
        <Heading text="Our Portfolio" color="orange" />
        <Heading text="Expand Your Digital Presence With Us" color="black" />
        <Paragraph
          text="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't"
        />
      </div>

      <DigitalsBar />
      <div className={styles.containerOfDivs}>
        <DivElement
          textInHeader="Web Development"
          textInParagraph="Web Design"
          color="grey"
        />
        <DivElement color="grey" />
        <DivElement color="grey" />
        <DivElement color="grey" />
        <DivElement color="grey" />
        <DivElement color="grey" />
        <DivElement color="grey" />
        <DivElement color="grey" />
        <DivElement color="grey" />
        <DivElement color="grey" />
        <DivElement color="grey" />
        <DivElement color="grey" />
      </div>
    </div>
  );
};

export default OurPortfolio;
