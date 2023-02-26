import styles from "./OurTeam.module.scss";
import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";
import DivElement from "../../components/DivElement/DivElement";
import Oblong from "../../components/Oblong/Oblong";

const OurTeam = () => {
  const data = [
    { personalData: "Warner Din", profession: "Graphic Designer" },
    { personalData: "Alen Mask", profession: "Backend Developer" },
    { personalData: "Dina Jems", profession: "Forntend Developer" },
    { personalData: "Steven Kok", profession: "UI/UX Engineer" },
  ];
  return (
    <div className={styles.element}>
      <div className={styles.textContainer}>
        <Heading text="Our Team" color="orange" />
        <Heading text="Meet Our Best Creative Team" color="black" />
        <Paragraph
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
alteration in some form, by injected humour, or randomised words which don't"
        />
      </div>
      <div className={styles.oblongContainer}>
        {data.map((element) => {
          return (
            <div className={styles.oblongAndDiv}>
              {" "}
              <DivElement color="grey" />
              <Oblong
                personalData={element.personalData}
                profession={element.profession}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.circles}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default OurTeam;
