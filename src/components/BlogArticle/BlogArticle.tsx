import { FC } from "react";
import BlogBoxUp from "../BlogBoxUp/BlogBoxUp";
import BlogBoxDown from "../BlogBoxDown/BlogBoxDown";
import styles from "./BlogArticle.module.scss";

interface IBlogArticle {
  headerTxt: string;
}

const BlogArticle: FC<IBlogArticle> = ({ headerTxt }) => {
  return (
    <div className={styles.element}>
      {/* <DivElement color="grey" />
      
      <DivElement
        color="black"
        textInHeader={headerTxt}
        textInParagraph="Read More>>"
      ></DivElement> */}

      <BlogBoxUp />
      <BlogBoxDown headerTxt={headerTxt} />
    </div>
  );
};

export default BlogArticle;
