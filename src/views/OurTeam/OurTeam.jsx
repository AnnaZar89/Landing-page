import styles from "./OurTeam.module.scss";
import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";
import SquareElement from "../../components/SquareElement/SquareElement";
import BottomBox from "../../components/BottomBox/BottomBox";
import CircleRow from "../../components/CircleRow/CircleRow";

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
      <div className={styles.boxContainer}>
        {data.map((element) => {
          return (
            // <div className={styles.oblongAndDiv}>
            <div className={styles.box}>
              {" "}
              <SquareElement color="grey" />
              <BottomBox
                personalData={element.personalData}
                profession={element.profession}
              />
            </div>
          );
        })}
      </div>
      <CircleRow />
    </div>
  );
};

export default OurTeam;
