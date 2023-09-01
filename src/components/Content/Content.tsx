import styles from "../Content/Content.module.scss";
import HeadingH1 from "../../typography/HeadingH1/HeadingH1";
import Paragraph, { SizeType } from "../../typography/Paragraph/Paragraph";
import Button from "../Button/Button";
import Slider from "../Slider/Slider";

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

  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 1,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 1,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 1,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  return (
    <div className={styles.element}>
      <Slider responsive={responsive} arrows infinite>
        <div className={styles.txtStyle}>
          <HeadingH1
            text="We are Creative and"
            color="white"
            additionalText=" Digital Agency"
          />
          <Paragraph
            text="There are many variations of passages of Lorem Ipsum available, but the suffered alteration in some form, by injected humour suffered alteration in by injected humour majority"
            size={SizeType.MEDIUM}
          />

          <div className={styles.buttonStyles}>
            <Button text="Read More" classAdd="btnInContent" />
            <Button text="Services" classAdd="btnInContent" />
          </div>
        </div>
        <div className={styles.txtStyle}>
          <HeadingH1
            text="We are Creative and"
            color="white"
            additionalText=" Digital Agency"
          />
          <Paragraph
            text="There are many variations of passages of Lorem Ipsum available, but the
        suffered alteration in some form, by injected humour suffered alteration
        in by injected humour majority"
            size={SizeType.MEDIUM}
          />

          <div className={styles.buttonStyles}>
            <Button text="Read More" classAdd="btnInContent" />
            <Button text="Services" classAdd="btnInContent" />
          </div>
        </div>
        <div className={styles.txtStyle}>
          <HeadingH1
            text="We are Creative and"
            color="white"
            additionalText=" Digital Agency"
          />
          <Paragraph
            text="There are many variations of passages of Lorem Ipsum available, but the
        suffered alteration in some form, by injected humour suffered alteration
        in by injected humour majority"
            size={SizeType.MEDIUM}
          />

          <div className={styles.buttonStyles}>
            <Button text="Read More" classAdd="btnInContent" />
            <Button text="Services" classAdd="btnInContent" />
          </div>
        </div>
        {/* </div> */}
        {/* <div className={styles.element}> */}
        {/* <HeadingH1
          text="We are Creative and"
          color="white"
          additionalText=" Digital Agency"
        />
        <Paragraph
          text="There are many variations of passages of Lorem Ipsum available, but the
          suffered alteration in some form, by injected humour suffered alteration
          in by injected humour majority"
          size={SizeType.MEDIUM}
        />
  
        <div className={styles.buttonStyles}>
          <Button text="Read More" classAdd="btnInContent" />
          <Button text="Services" classAdd="btnInContent" />
        </div> */}
      </Slider>
    </div>
  );
};

export default Content;
