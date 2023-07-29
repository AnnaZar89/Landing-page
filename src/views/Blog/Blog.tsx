import Heading from "../../typography/Heading/Heading";
import Paragraph, { SizeType } from "../../typography/Paragraph/Paragraph";
import BlogArticle from "../../components/BlogArticle/BlogArticle";
import styles from "./Blog.module.scss";
import Container from "../../components/Container/Container";

const headerText: string[] = [
  "Things You Can Do to Refresh Marching towards a green future.",
  "Duis commodo neque tellus, et fringi sodales augue accumsan lla. ",
  "Nulla eu eros feugiat risus molestie porta at nec ligula.",
];

const Blog = () => {
  return (
    <Container>
      <div className={styles.element}>
        {/* <Heading text="Latest blog" color="orange" /> */}
        <Paragraph
        text="Latest Blog" size={SizeType.LARGE}
        variant="semiBold"
      />
        <Heading text="See Our Latest & New Blog" color="black" />

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
