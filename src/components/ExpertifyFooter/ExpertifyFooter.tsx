import Image from "../Image/Image";
import expertifyLogo from "../../assets/images/logo-header.png";
import styles from "./ExpertifyFooter.module.scss";
import Typography from "../../typography/Typography";

type ExpertifyDataT = {
  text: string;
  size: string;
};
const EXPERTIFY_DATA: ExpertifyDataT[] = [
  {
    text: "Pellentesque mattis enim nisi, a posuere tellus volutpat vitae. Sed risus est, laoreet sed arcu",
    size: "medium",
  },
  {
    text: "Open Hour",
    size: "extraExtraLarge",
  },
  { text: "Sun-Thu Open 10AM to 9PM", size: "standard" },
  { text: "Fri-Sat ", size: "standard" },
  { text: " Closed", size: "standard" },
];

const ExpertifyFooter = () => {
  return (
    <div className={styles.element}>
      <Image src={expertifyLogo} />
      {EXPERTIFY_DATA.map(({ text }, index) => (
        <Typography tag="p" key={index}>
          {text}
        </Typography>
      ))}
    </div>
  );
};

export default ExpertifyFooter;
