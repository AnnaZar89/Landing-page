import styles from "../Content/Content.module.scss";
import Heading from "../../typography/Heading/Heading";
import Paragraph, { SizeType } from "../../typography/Paragraph/Paragraph";
import Button from "../Button/Button";

const Content = () => {
  return (
    <div className={styles.element}>
      <Heading
        text="We are Creative and"
        color="white"
        additionalText=" Digital Agency"
      />
      <Paragraph
        text="There are many variations of passages of Lorem Ipsum available, but the
        suffered alteration in some form, by injected humour suffered alteration
        in by injected humour majority"
        size={SizeType.MEDIUM}
      />

      <div className={styles.buttonStyles}>
        <Button text="Read More" classAdd="btnInContent" />
        <Button text="Services" classAdd="btnInContent" />
      </div>
    </div>
  );
};

export default Content;
