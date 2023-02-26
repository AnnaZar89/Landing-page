import styles from "./Paragraph.module.scss";
import { FC } from "react";

interface IParagraph {
  text: String;
}

const Paragraph: FC<IParagraph> = ({ text }) => {
  return <p className={styles.element}>{text}</p>;
};

export default Paragraph;
