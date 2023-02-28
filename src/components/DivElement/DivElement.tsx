import { FC } from "react";
import { useState } from "react";
import styles from "./DivElement.module.scss";
import cn from "classnames";
import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";
import Socials from "../Socials/Socials";

interface IDivElement {
  textInHeader?: string;
  textInParagraph?: string;
  color: string;
  // width?: string;
  // height?: string;
  className?: string;
}

const DivElement: FC<IDivElement> = ({
  textInHeader,
  textInParagraph,
  color,
  className,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <div
        className={cn(styles.element, className, styles[`hasColor-${color}`])}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {textInHeader && <Heading text={textInHeader} color="white" />}
        {textInParagraph && <Paragraph text={textInParagraph} />}
        {isHovering && <Socials />}
      </div>
    </>
  );
};

export default DivElement;
