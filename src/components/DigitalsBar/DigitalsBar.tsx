import styles from "../DigitalsBar/DigitalsBar.module.scss";
import Heading from "../../typography/Heading/Heading";

const digitals = [
  "All",
  "Graphic Design",
  "Mobile App",
  "Web Development",
  "Web Design",
];

const DigitalsBar = () => {
  return (
    <div className={styles.element}>
      {digitals.map((digit) => (
        <Heading text={digit} color="black" />
      ))}
      {/* <div className={styles.all}>All</div>
      <div className={styles.digit}>Graphiic Design</div>
      <div className={styles.digit}>Mobile App</div>
      <div className={styles.digit}>Web Development</div>
      <div className={styles.digit}>Web Design</div> */}
    </div>
  );
};

export default DigitalsBar;
