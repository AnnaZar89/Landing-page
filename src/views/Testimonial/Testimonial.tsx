import Paragraph from "../../typography/Paragraph/Paragraph";
import Heading from "../../typography/Heading/Heading";
import TestimonialBox from "../../components/TestimonialBox/TestimonialBox";
import styles from "./Testimonial.module.scss";
import CircleRow from "../../components/CircleRow/CircleRow";

const Testimonial = () => {
  return (
    <div className={styles.element}>
      <div className={styles.divContainer}>
        <Heading text="Testimonial" color="orange" />
        <Heading
          color="black"
          text="What Our Client Say
About Us"
        />
        <Paragraph text="Aidmycareer is the heart of career questions. Aidmycareer platform that provides" />
      </div>

      <div className={styles.logoContainer}>
        <TestimonialBox
          text="Aidmycareer is the heart of career 
Aidmycareer platform that provides is the heart of career questions. Aidmycareer platform that provides"
          name="Alen Jonson"
          role="UI/UX"
        />
        <TestimonialBox
          text="Aidmycareer is the heart of career 
Aidmycareer platform that provides is the heart of career questions. Aidmycareer platform that provides"
          name="Jons Bob"
          role="Graphic"
        />
      </div>

      <CircleRow />
    </div>
  );
};

export default Testimonial;
