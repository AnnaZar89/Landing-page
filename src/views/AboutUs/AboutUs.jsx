import styles from "../AboutUs/AboutUs.module.scss";
import rectangle from "../../assets/images/rectangle-about-us.png";
import playAboutUs from "../../assets/images/play-about-us.png";
import Image from "../../components/Image/Image";

import Container from "../../components/Container/Container";
import Typography from "../../typography/Typography";
import ListBoxContainer from "../../components/ListBoxContainer/ListBoxContainer";
import Button from "../../components/Button/Button";
import { ReactComponent as Check } from "../../assets/icons/check-list.svg";

const AboutUs = () => {
  return (
    <Container>
      <div className={styles.element}>
        <div className={styles.logoContainer}>
          <Image src={rectangle} />
          <Image src={playAboutUs} />
        </div>

        {/* <div className={styles.element}> */}
        <div className={styles.aboutUsData}>
          <Typography tag="span" color="pink">
            test123
          </Typography>

          <Typography className={styles.about} tag="h2" color=" #ff4815">
            About us
          </Typography>
          <Typography
            text="About us"
            variant="h2"
            color="orange"
            fontFamily="poppins"
            weight="semiBold"
          />
          <ListBoxContainer
            listData={[
              "There are many variations of passages of Lorem Ipsum available",
              "Passages of Lorem Ipsum available",
              "Many variations of passages of Lorem Ipsum available",
              "Variations of passages of Lorem Ipsum available",
            ]}
            icon={<Check />}
          />
          <Button text="Read More" classAdd="btnInContent" />
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
