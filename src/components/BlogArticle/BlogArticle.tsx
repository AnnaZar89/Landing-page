import { FC } from "react";
import BlogImage from "../BlogImage/BlogImage";
import BlogBox from "../BlogBox/BlogBox";

interface IBlogArticle {
  headerTxt: string;
}

const BlogArticle: FC<IBlogArticle> = ({ headerTxt }) => {
  return (
      <div>
        <BlogImage />
        <BlogBox headerTxt={headerTxt} />
      </div>
  );
};

export default BlogArticle;
