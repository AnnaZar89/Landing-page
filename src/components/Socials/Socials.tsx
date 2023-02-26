import { ReactComponent as InstagramIcon } from "../../assets/icons/insta-our-team.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook-our-team.svg";
import { ReactComponent as TweeterIcon } from "../../assets/icons/twitter-our-team.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp-our-team.svg";
import styles from "./Socials.module.scss";

const Socials = () => {
  return (
    <div className={styles.element}>
      <InstagramIcon />
      <FacebookIcon />
      <TweeterIcon />
      <WhatsappIcon />
    </div>
  );
};

export default Socials;
