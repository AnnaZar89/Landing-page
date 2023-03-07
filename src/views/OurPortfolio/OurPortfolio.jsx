import DigitalsBar from "../../components/DigitalsBar/DigitalsBar";
import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";
import styles from "../OurPortfolio/OurPortfolio.module.scss";

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
    </div>
  );
};

export default OurPortfolio;
