import styles from "./OurTeam.module.scss";
import SquareElement from "../../components/SquareElement/SquareElement";
import BottomBox from "../../components/BottomBox/BottomBox";
import Container from "../../components/Container/Container";
import Slider from "../../components/Slider/Slider";
import Typography from "../../typography/Typography";

const OurTeam = () => {
  const data = [
    { personalData: "Warner Din", profession: "Graphic Designer" },
    { personalData: "Alen Mask", profession: "Backend Developer" },
    { personalData: "Dina Jems", profession: "Frontend Developer" },
    { personalData: "Steven Kok", profession: "UI/UX Engineer" },
  ];

  const responsive = {
    xl: {
      breakpoint: { max: 1440, min: 1200 },
      items: 4,
    },
    lg: {
      breakpoint: { max: 1200, min: 910 },
      items: 3,
    },
    md: {
      breakpoint: { max: 910, min: 768 },
      items: 2,
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
  return (
    <Container className={styles.sliderStyle}>
      <div className={styles.element}>
        <div className={styles.textContainer}>
          <Typography tag="h3">Our Team</Typography>
          <Typography tag="h2">Meet Our Best Creative Team</Typography>
          <Typography tag="p">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't
          </Typography>
        </div>
        <div className={styles.boxContainer}>
          <Slider
            className={styles.sliderStyle}
            responsive={responsive}
            dots
            arrows={false}
            infinite={true}
          >
            {data.map((element, idx) => {
              return (
                <div className={styles.box} key={idx}>
                  <SquareElement />
                  <BottomBox
                    personalData={element.personalData}
                    profession={element.profession}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default OurTeam;
