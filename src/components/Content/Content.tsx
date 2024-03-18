import styles from "../Content/Content.module.scss";
import Button from "../Button/Button";
import Slider from "../Slider/Slider";
import Typography from "../../typography/Typography";

const Content = () => {
  const responsive = {
    xl: {
      breakpoint: { max: 20040, min: 1200 },
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
    <div className={styles.element}>
      <Slider responsive={responsive} arrows infinite>
        <div className={styles.txtStyle}>
          <Typography tag="h1">We are Creative and</Typography>
          <Typography tag="h1"> Digital Agency</Typography>
          <Typography tag="p">
            There are many variations of passages of Lorem Ipsum available, but
            the suffered alteration in some form, by injected humour suffered
            alteration in by injected humour majority
          </Typography>
          <div className={styles.buttonStyles}>
            <Button text="Read More" classAdd="btnInContent" />
            <Button text="Services" classAdd="btnInContent" />
          </div>
        </div>
        <div className={styles.txtStyle}>
          <Typography tag="h1">We are Creative and</Typography>
          <Typography tag="h1"> Digital Agency</Typography>
          <Typography tag="p">
            There are many variations of passages of Lorem Ipsum available, but
            the suffered alteration in some form, by injected humour suffered
            alteration in by injected humour majority
          </Typography>
          <div className={styles.buttonStyles}>
            <Button text="Read More" classAdd="btnInContent" />
            <Button text="Services" classAdd="btnInContent" />
          </div>
        </div>
        <div className={styles.txtStyle}>
          <Typography tag="h1">We are Creative and</Typography>
          <Typography tag="h1"> Digital Agency</Typography>
          <Typography tag="p">
            There are many variations of passages of Lorem Ipsum available, but
            the suffered alteration in some form, by injected humour suffered
            alteration in by injected humour majority
          </Typography>
          <div className={styles.buttonStyles}>
            <Button text="Read More" classAdd="btnInContent" />
            <Button text="Services" classAdd="btnInContent" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Content;
