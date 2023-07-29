import styles from "./ContentInAboutUs.module.scss";
import Paragraph from "../../typography/Paragraph/Paragraph";
import Heading from "../../typography/Heading/Heading";
import Button from "../Button/Button";
import ListBoxContainer from "../ListBoxContainer/ListBoxContainer";
import { ReactComponent as Check } from "../../assets/icons/check-list.svg";

const ContentInAboutUs = () => {
  return (
    <div className={styles.element}>
      {/* <Heading text="about us" color="orange" /> */}
      <Paragraph
        text="About us"
        size="large"
        vaariant="semiBold"
      />
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
        size="medium"
      />
      <ListBoxContainer
        listData={[
          "There are many variations of passages of Lorem Ipsum available",
          "Passages of Lorem Ipsum available",
          "Many variations of passages of Lorem Ipsum available",
          "Variations of passages of Lorem Ipsum available",
        ]}
        Icon={Check}
      />
      <Button text="Read More" classAdd="btnInContent" />
    </div>
  );
};

export default ContentInAboutUs;
