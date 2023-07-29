import styles from "../OurClient/OurClient.module.scss";
import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";
import { ReactComponent as CampingArea } from "../../assets/icons/camping-area-our-clients.svg";
import { ReactComponent as Camping } from "../../assets/icons/camping-our-clients.svg";
import { ReactComponent as Climbing } from "../../assets/icons/climbing-our-clients.svg";
import { ReactComponent as Compass } from "../../assets/icons/compass-our-clients.svg";
import { ReactComponent as Mountain } from "../../assets/icons/mountain-our-clients.svg";
import { ReactComponent as Shoes } from "../../assets/icons/shoes-our-clients.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-left.svg";
import Container from "../../components/Container/Container";

const OurClient = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
      <div className={styles.element}>
      <div className={styles.elementDiv}>
      <Paragraph
        text="Clients"
        size="large"
        variant="semiBold"
      />
        {/* <Heading text="Clients" color="orange" /> */}
        <Heading text="Our Clients" color="black" />
        <Paragraph
          text="There are many variations of passages of Lorem Ipsum available, suffered
        alteration in some form, by injected humour suffered by injected humour
        majority"
          size="medium"
        />
      </div>

      <div className={styles.icons}>
        <div className={styles.arrow}>
          <Arrow />
          <Arrow />
        </div>
        <Mountain />
        <Climbing />
        <Shoes />
        <Compass />
        <Camping />
        <CampingArea />
      </div>
      </div>
      </Container>
    </div>
  );
};

export default OurClient;
