// import Paragraph from "../../typography/Paragraph/Paragraph";
import { Fragment } from "react";
import TestimonialBox from "../../components/TestimonialBox/TestimonialBox";
import styles from "./Testimonial.module.scss";
import Container from "../../components/Container/Container";
import Slider from "../../components/Slider/Slider";
import Typography from "../../typography/Typography";

const Testimonial = () => {
  const responsive = {
    xl: {
      breakpoint: { max: 1440, min: 1200 },
      items: 2,
    },
    lg: {
      breakpoint: { max: 1200, min: 910 },
      items: 2,
    },
    md: {
      breakpoint: { max: 910, min: 768 },
      items: 1,
    },
    sm: {
      breakpoint: { max: 768, min: 576 },
      items: 1,
    },
    xs: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  const Box = [
    <TestimonialBox
      text="Aidmycareer is the heart of career 
Aidmycareer platform that provides is the heart of career questions. Aidmycareer platform that provides"
      name="Alen Jonson"
      role="UI/UX"
    />,
    <TestimonialBox
      text="Aidmycareer is the heart of career 
Aidmycareer platform that provides is the heart of career questions. Aidmycareer platform that provides"
      name="Jons Bob"
      role="Graphic"
    />,
    <TestimonialBox
      text="Aidmycareer is the heart of career 
Aidmycareer platform that provides is the heart of career questions. Aidmycareer platform that provides"
      name="Alen Jonson"
      role="UI/UX"
    />,
    <TestimonialBox
      text="Aidmycareer is the heart of career 
Aidmycareer platform that provides is the heart of career questions. Aidmycareer platform that provides"
      name="Jons Bob"
      role="Graphic"
    />,
  ];
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.testimonialContent}>
          <div className={styles.element}>
            <Typography tag="h3">Testimonial</Typography>
            <Typography tag="h2">What Our Client Say About Us</Typography>
            <Typography tag="p">
              Aidmycareer is the heart of career questions. Aidmycareer platform
              that provides
            </Typography>
          </div>
        </div>
        <Slider dots responsive={responsive} arrows={false}>
          {Box.map((element, index) => (
            <Fragment key={index}>{element}</Fragment>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Testimonial;
