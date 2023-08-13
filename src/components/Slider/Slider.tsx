import { ReactNode, FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Slider.module.scss";

type responsiveT = {
  [key: string]: BreakpointAndItemsT;
};

type BreakpointAndItemsT = {
  breakpoint: BreakpointT;
  items: number;
};

type BreakpointT = {
  [key: string]: number;
};

interface ISlider {
  children: ReactNode;
  className?: string;
  // responsive?: responsiveT;
  responsive?: any;
  dots?: boolean;
  arrows?: boolean;
  infinite?: boolean;
  // renderDotsOutside: any;
}
const Slider: FC<ISlider> = ({
  children,
  responsive,
  className,
  dots,
  arrows,
  infinite,
  // renderDotsOutside,
}) => {
  return (
    // <div>
    <Carousel
      responsive={responsive}
      // showDots={true}

      infinite={infinite}
      containerClass={styles.carouselContainer}
      // dotListClass="react-multi-carousel-dot"
      showDots={dots}
      arrows={arrows}
      // renderDotsOutside={renderButtonGroupOutside}
    >
      {children}
    </Carousel>
    // </div>
  );
};

export default Slider;
