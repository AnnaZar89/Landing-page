import styles from "../Feature/Feature.module.scss";
import FeatureBox from "../../components/FeatureBox/FeatureBox";
import { ReactComponent as Analytics } from "../../assets/icons/analytics-features.svg";
import { ReactComponent as Satisfied } from "../../assets/icons/satisfied-features.svg";
import { ReactComponent as Award } from "../../assets/icons/award-features.svg";
import { ReactComponent as Support } from "../../assets/icons/support-features.svg";
import Container from "../../components/Container/Container";

const Feature = () => {
  return (
    <div className={styles.wrapper}>
    <Container>
    <div className={styles.element}>
      <FeatureBox
        imageFeature={<Analytics />}
        content="8808"
        text="Project Complete"
      />
      <FeatureBox
        imageFeature={<Satisfied />}
        content="7778+"
        text="Satisfied Clients"
      />
      <FeatureBox imageFeature={<Award />} content="50+" text="Award" />
      <FeatureBox
        imageFeature={<Support />}
        content="24/7"
        text="Support Available"
      />
    </div>
    </Container>
  </div>
  );
};

export default Feature;
