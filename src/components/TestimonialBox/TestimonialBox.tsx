import { FC } from "react";
import { ReactComponent as Quote } from "../../assets/icons/quote-testimonial.svg";
import styles from "./TestimonialBox.module.scss";
import Typography from "../../typography/Typography";

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
      <Typography tag="p">{text}</Typography>
      <Typography tag="p">{name}</Typography>
      <Typography tag="p">{role}</Typography>
      <Quote />
    </div>
  );
};

export default TestimonialBox;
