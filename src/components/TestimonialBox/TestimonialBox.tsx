import { FC } from "react";
import Paragraph from "../../typography/Paragraph/Paragraph";
import { ReactComponent as Quote } from "../../assets/icons/quote-testimonial.svg";
import styles from "./TestimonialBox.module.scss";

interface ITestimonialBox {
  text: string;
  name: string;
  role: string;
}
const TestimonialBox: FC<ITestimonialBox> = ({ text, name, role }) => {
  return (
    <div className={styles.element}>
      <Quote />
      <div className={styles.text}></div>
      <Paragraph text={text} />
      <Paragraph text={name} />
      <Paragraph text={role} />
      <Quote />
    </div>
  );
};

export default TestimonialBox;
