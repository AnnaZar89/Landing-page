import { FC } from "react";
import BlogBoxUp from "../BlogBoxUp/BlogBoxUp";
import BlogBoxDown from "../BlogBoxDown/BlogBoxDown";

interface IBlogArticle {
  headerTxt: string;
}

const BlogArticle: FC<IBlogArticle> = ({ headerTxt }) => {
  return (
    <>
      <div>
        <BlogBoxUp />
        <BlogBoxDown headerTxt={headerTxt} />
      </div>
    </>
  );
};

export default BlogArticle;
