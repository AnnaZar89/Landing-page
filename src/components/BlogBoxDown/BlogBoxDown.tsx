import { FC } from "react";
import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";
import styles from "./BlogBoxDown.module.scss";

interface IBlogBoxDown {
  headerTxt: string;
}

const BlogBoxDown: FC<IBlogBoxDown> = ({ headerTxt }) => {
  return (
    <div className={styles.element}>
      <Heading text={headerTxt} color="black" />
      <Paragraph text="Read More>>" />
    </div>
  );
};

export default BlogBoxDown;
