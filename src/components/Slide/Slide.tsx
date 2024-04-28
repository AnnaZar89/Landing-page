import CircleBox from "../CircleBox/CircleBox";
import styles from "./Slide.module.scss";

const Slide = () => {
  return (
    <div className={styles.element}>
      <CircleBox>
        <p>01</p>
      </CircleBox>
      <CircleBox>
        <p>02</p>
      </CircleBox>
      <CircleBox>
        <p>03</p>
      </CircleBox>
      <CircleBox>
        <p>04</p>
      </CircleBox>
      <CircleBox>
        <p>05</p>
      </CircleBox>
    </div>
  );
};

export default Slide;
