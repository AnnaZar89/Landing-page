import { FC } from "react";
import styles from "./SquareElement.module.scss";
import cn from "classnames";
import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";

interface ISquareElement {
  title: string;
  className?: string;
  description: string;
}

const SquareElement: FC<ISquareElement> = ({
  title,
  className,
  description,
}) => {
  return (
    <div className={cn(styles.element, className)}>
      <Heading text={title} color="black" />
      <Paragraph text={description} />
    </div>
  );
};

export default SquareElement;
