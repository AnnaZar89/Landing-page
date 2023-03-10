import { FC } from "react";
import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";
import RectangleBlogBoxDown from "../RectangleInBlogBoxDown/RectangleBlogBoxDown";
import styles from "./BlogBoxDown.module.scss";
import { ReactComponent as WebDesign } from "../../assets/icons/web-design-blog.svg";
import { ReactComponent as Calender } from "../../assets/icons/date-blog.svg";

interface IBlogBoxDown {
  headerTxt: string;
}

const BlogBoxDown: FC<IBlogBoxDown> = ({ headerTxt }) => {
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

export default BlogBoxDown;
