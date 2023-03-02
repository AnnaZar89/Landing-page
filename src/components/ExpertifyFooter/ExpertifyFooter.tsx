import Logo from "../Logo/Logo";
import expertifyLogo from "../../assets/images/logo-header.png";
import styles from "./ExpertifyFooter.module.scss";
import Heading from "../../typography/Heading/Heading";

const ExpertifyFooter = () => {
  return (
    <div className={styles.element}>
      <Logo logoImg={expertifyLogo} />
      <Heading
        text="Pellentesque mattis enim nisi, a posuere tellus volutpat vitae. Sed risus est, laoreet sed arcu"
        color="white"
      />
      <Heading text="Open Hour" color="white" />
      <Heading text="Sun-Thu Open 10AM to 9PM" color="white" />
      <Heading text="Fri-Sat " additionalText=" Closed" color="white" />
    </div>
  );
};

export default ExpertifyFooter;
