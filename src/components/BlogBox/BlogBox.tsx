import { FC } from "react";
import Heading from "../../typography/HeadingH2/HeadingH2";
import Paragraph from "../../typography/Paragraph/Paragraph";
import RectangleBlogBox from "../RectangleInBlogBox/RectangleBlogBox";
import styles from "./BlogBox.module.scss";
import { ReactComponent as WebDesign } from "../../assets/icons/web-design-blog.svg";
import { ReactComponent as Calender } from "../../assets/icons/date-blog.svg";
import Typography from "../../typography/Typography";

interface IBlogBox {
  headerTxt: string;
}

const BlogBox: FC<IBlogBox> = ({ headerTxt }) => {
  return (
    <div className={styles.element}>
      <div className={styles.containerBox}>
        <RectangleBlogBox icon={<WebDesign />} text="Web Design" />
        <RectangleBlogBox icon={<Calender />} text="October 26, 2020" />
      </div>
      {/* <Heading text={headerTxt} color="black" /> */}
      <Typography tag="h2">{headerTxt}</Typography>
      <Typography tag="p">Read More{`>>`}</Typography>
      {/* <Paragraph text="Read More>>" /> */}
    </div>
  );
};

export default BlogBox;
