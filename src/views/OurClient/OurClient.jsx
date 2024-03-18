import styles from "../OurClient/OurClient.module.scss";
import Heading from "../../typography/HeadingH2/HeadingH2";
import Paragraph from "../../typography/Paragraph/Paragraph";
import { ReactComponent as CampingArea } from "../../assets/icons/camping-area-our-clients.svg";
import { ReactComponent as Camping } from "../../assets/icons/camping-our-clients.svg";
import { ReactComponent as Climbing } from "../../assets/icons/climbing-our-clients.svg";
import { ReactComponent as Compass } from "../../assets/icons/compass-our-clients.svg";
import { ReactComponent as Mountain } from "../../assets/icons/mountain-our-clients.svg";
import { ReactComponent as Shoes } from "../../assets/icons/shoes-our-clients.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-left.svg";
import Container from "../../components/Container/Container";
import Slider from "../../components/Slider/Slider";
import Typography from "../../typography/Typography";

const OurClient = () => {
  const responsive = {
    xl: {
      breakpoint: { max: 1440, min: 1200 },
      items: 1,
    },
    lg: {
      breakpoint: { max: 1200, min: 910 },
      items: 1,
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
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.element}>
          <div className={styles.elementDiv}>
            <Typography tag="h3">Clients</Typography>
            <Typography tag="h2">Our Clients</Typography>
            <Typography tag="p">
              There are many variations of passages of Lorem Ipsum available,
              suffered alteration in some form, by injected humour suffered by
              injected humour majority
            </Typography>
          </div>
          <Slider
            className={styles.sliderStyle}
            responsive={responsive}
            arrows
            infinite
          >
            <div className={styles.icons}>
              <Mountain />
              <Climbing />
              <Shoes />
              <Compass />
              <Camping />
              <CampingArea />
            </div>
            <div className={styles.icons}>
              <Mountain />
              <Climbing />
              <Shoes />
              <Compass />
              <Camping />
              <CampingArea />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default OurClient;
