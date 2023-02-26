import styles from "./ContentInAboutUs.module.scss";
import Paragraph from "../../typography/Paragraph/Paragraph";
import Heading from "../../typography/Heading/Heading";
import List from "../List/List";
import Button from "../Button/Button";

const ContentInAboutUs = () => {
  return (
    <div className={styles.element}>
      <Heading text="about us" color="orange" />
      <Heading
        text="Aliquam id est ullamcorper dictu arcu sed"
        className
        color="black"
        additionalText=" Your Business"
      />
      <Paragraph
        text="There are many variations of passages of Lorem Ipsum available, but the
      some suffered alteration in some form, by injected humour suffered
      alteration in by injected humour majority"
      />
      <List
        listData={[
          "There are many variations of passages of Lorem Ipsum available",
          "Passages of Lorem Ipsum available",
          "Many variations of passages of Lorem Ipsum available",
          "Variations of passages of Lorem Ipsum available",
        ]}
      />
      <Button text="Read More" classAdd="btnInContent" />
    </div>
  );
};

export default ContentInAboutUs;
