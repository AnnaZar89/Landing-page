import styles from "../AboutUs/AboutUs.module.scss";
import rectangle from "../../assets/images/rectangle-about-us.png";
import playAboutUs from "../../assets/images/play-about-us.png";
import Image from "../../components/Image/Image";
import Container from "../../components/Container/Container";
import Typography from "../../typography/Typography";
import ListBoxContainer from "../../components/ListBoxContainer/ListBoxContainer";
import Button from "../../components/Button/Button";
import { ReactComponent as Check } from "../../assets/icons/check-list.svg";
import cn from "classnames";

const AboutUs = () => {
  return (
    <Container>
      <div className={styles.element}>
        <div className={styles.boxes}>
          <div className={cn(styles.square, styles.right)} />
          <div className={cn(styles.square, styles.left)} />
        </div>
        <div className={styles.aboutUsData}>
          <Typography tag="h3" color=" #ff4815">
            About us
          </Typography>
          <Typography tag="h2">
            Aliquam id est ullamcorper dictu arcu sed{" "}
          </Typography>
          <Typography tag="h2">Your Business</Typography>
          <Typography tag="p">
            There are many variations of passages of Lorem Ipsum available, but
            the some suffered alteration in some form, by injected humour
            suffered alteration in by injected humour majority{" "}
          </Typography>
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
