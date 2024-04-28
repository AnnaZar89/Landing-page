import BlogArticle from "../../components/BlogArticle/BlogArticle";
import styles from "./Blog.module.scss";
import Container from "../../components/Container/Container";
import Typography from "../../typography/Typography";

const headerText: string[] = [
  "Things You Can Do to Refresh Marching towards a green future.",
  "Duis commodo neque tellus, et fringi sodales augue accumsan lla. ",
  "Nulla eu eros feugiat risus molestie porta at nec ligula.",
];

const Blog = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.element}>
        <Typography tag="h3">Latest Blog</Typography>
        <Typography tag="h2">See Our Latest & New Blog</Typography>
        <div className={styles.blogArticleContainer}>
          {headerText.map((element, index) => (
            <BlogArticle headerTxt={element} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Blog;
