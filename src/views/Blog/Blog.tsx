import Heading from "../../typography/Heading/Heading";
import BlogArticle from "../../components/BlogArticle/BlogArticle";
import styles from "./Blog.module.scss";

const Blog = () => {
  const headerText = [
    "Things You Can Do to Refresh Marching towards a green future.",
    "Duis commodo neque tellus, et fringi sodales augue accumsan lla. ",
    "Nulla eu eros feugiat risus molestie porta at nec ligula.",
  ];
  return (
    <div className={styles.element}>
      <Heading text="Latest blog" color="orange" />
      <Heading text="See Our Latest & New Blog" color="black" />
      <div className={styles.blogArticleContainer}>
        {headerText.map((element) => (
          <BlogArticle headerTxt={element} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
