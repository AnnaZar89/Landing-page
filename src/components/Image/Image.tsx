import { FC } from "react";

interface IImage {
  src: string;
}

const Image: FC<IImage> = ({ src }) => {
  return <img src={src} alt="" />;
};

export default Image;
