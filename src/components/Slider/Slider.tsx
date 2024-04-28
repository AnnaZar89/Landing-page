import { ReactNode, FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ISlider {
  children: ReactNode;
  className?: string;
  responsive?: any;
  dots?: boolean;
  arrows?: boolean;
  infinite?: boolean;
}
const Slider: FC<ISlider> = ({
  children,
  responsive,
  className,
  dots,
  arrows,
  infinite,
}) => {
  return (
    <Carousel
      responsive={responsive}
      infinite={infinite}
      // containerClass={styles.carouselContainer}
      showDots={dots}
      arrows={arrows}
    >
      {children}
    </Carousel>
  );
};

export default Slider;
