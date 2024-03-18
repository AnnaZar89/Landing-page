import Container from "../../components/Container/Container";
import DigitalsBar from "../../components/DigitalsBar/DigitalsBar";
import Heading from "../../typography/HeadingH2/HeadingH2";
import Paragraph from "../../typography/Paragraph/Paragraph";
import Typography from "../../typography/Typography";
import styles from "../OurPortfolio/OurPortfolio.module.scss";

const OurPortfolio = () => {
  return (
    <Container>
      <div className={styles.element}>
        <div className={styles.textContainer}>
          <Typography tag="h3">Our Portfolio</Typography>
          <Typography tag="h2">Expand Your Digital Presence With Us</Typography>
          <Typography tag="p">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't
          </Typography>
        </div>
        <DigitalsBar />
      </div>
    </Container>
  );
};

export default OurPortfolio;
