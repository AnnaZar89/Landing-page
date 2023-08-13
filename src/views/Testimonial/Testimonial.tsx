// import Paragraph from "../../typography/Paragraph/Paragraph";
import { Fragment } from "react";
import Paragraph, { SizeType } from "../../typography/Paragraph/Paragraph";
import Heading from "../../typography/HeadingH2/HeadingH2";
import TestimonialBox from "../../components/TestimonialBox/TestimonialBox";
import styles from "./Testimonial.module.scss";
import CircleRow from "../../components/CircleRow/CircleRow";
import Container from "../../components/Container/Container";
import Slider from "../../components/Slider/Slider";

const Testimonial = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 2,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 2,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 1,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

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
    // <div className={styles.wrapper}>
    <Container className={styles.container}>
      <div className={styles.testimonialContent}>
        <div className={styles.element}>
          <Paragraph
            text="Testimonial"
            size={SizeType.LARGE}
            variant="semiBold"
          />
          <Heading color="black" text="What Our Client Say About Us" />
          <Paragraph text="Aidmycareer is the heart of career questions. Aidmycareer platform that provides" />
        </div>
      </div>

      <Slider dots responsive={responsive} arrows={false}>
        {Box.map((element, index) => (
          <Fragment key={index}>{element}</Fragment>
        ))}
      </Slider>
    </Container>
    // </div>
  );
};

export default Testimonial;
