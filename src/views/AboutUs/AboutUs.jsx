import styles from "../AboutUs/AboutUs.module.scss";
import rectangle from "../../assets/images/rectangle-about-us.png";
import playAboutUs from "../../assets/images/play-about-us.png";
import Logo from "../../components/Logo/Logo";
import ContentInAboutUs from "../../components/ContentInAboutUs/ContentInAboutUs";
import Container from "../../components/Container/Container";

const AboutUs = () => {
  return (
    <Container>
    <div className={styles.element}>
      <div className={styles.logoContainer}>
        <Logo logoImg={rectangle} />
        <Logo logoImg={playAboutUs} />
      </div>
      <ContentInAboutUs />
    </div>
    </Container>
  );
};

export default AboutUs;
