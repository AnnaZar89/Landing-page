import { FC } from "react";
import Heading from "../../typography/HeadingH2/HeadingH2";
import Paragraph from "../../typography/Paragraph/Paragraph";
import RectangleBlogBoxDown from "../RectangleInBlogBox/RectangleBlogBox";
import styles from "./BlogBoxDown.module.scss";
import { ReactComponent as WebDesign } from "../../assets/icons/web-design-blog.svg";
import { ReactComponent as Calender } from "../../assets/icons/date-blog.svg";

interface IBlogBox {
  headerTxt: string;
}

const BlogBox: FC<IBlogBox> = ({ headerTxt }) => {
  return (
    <div className={styles.element}>
      <div className={styles.containerBox}>
        <RectangleBlogBoxDown icon={<WebDesign />} text="Web Design" />
        <RectangleBlogBoxDown icon={<Calender />} text="October 26, 2020" />
      </div>
      <Heading text={headerTxt} color="black" />
      <Paragraph text="Read More>>" />
    </div>
  );
};

export default BlogBox;
