import styles from "../AboutUs/AboutUs.module.scss";
import rectangle from "../../assets/images/rectangle-about-us.png";
import playAboutUs from "../../assets/images/play-about-us.png";
import Logo from "../../components/Logo/Logo";
import ContentInAboutUs from "../../components/ContentInAboutUs/ContentInAboutUs";

const AboutUs = () => {
  return (
    <div className={styles.element}>
      <Logo logoImg={rectangle} />
      <Logo logoImg={playAboutUs} />
      <ContentInAboutUs />
    </div>
  );
};

export default AboutUs;
