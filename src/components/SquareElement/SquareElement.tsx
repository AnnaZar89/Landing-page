import styles from "./SquareElement.module.scss";
import { ReactComponent as Instagram } from "../../assets/icons/insta-our-team.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook-our-team.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter-our-team.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/whatsapp-our-team.svg";
import IconBox from "../../components/IconBox/IconBox";

const SquareElement = () => {
  return (
    <div className={styles.element}>
      <IconBox>
        <Instagram />
        <Facebook />
        <Twitter />
        <Whatsapp />
      </IconBox>
    </div>
  );
};

export default SquareElement;
