import styles from "./OurTeam.module.scss";
import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";
import SquareElement from "../../components/SquareElement/SquareElement";
import BottomBox from "../../components/BottomBox/BottomBox";
import CircleRow from "../../components/CircleRow/CircleRow";
import { ReactComponent as Instagram } from "../../assets/icons/insta-our-team.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook-our-team.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter-our-team.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/whatsapp-our-team.svg";

const OurTeam = () => {
  const data = [
    { personalData: "Warner Din", profession: "Graphic Designer" },
    { personalData: "Alen Mask", profession: "Backend Developer" },
    { personalData: "Dina Jems", profession: "Frontend Developer" },
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
        {data.map((element, idx) => {
          return (
            <div className={styles.box} key={idx}>
              {/* <SquareElement color="grey" /> */}
              <SquareElement />
              <div className={styles.icons}>
                <Instagram />
                <Facebook />
                <Twitter />
                <Whatsapp />
              </div>
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
