import Image from "../Image/Image";
import expertifyLogo from "../../assets/images/logo-header.png";
import styles from "./ExpertifyFooter.module.scss";
import Paragraph, { SizeType } from "../../typography/Paragraph/Paragraph";
import Typography from "../../typography/Typography";
// import Heading from "../../typography/Heading/Heading";

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
// "Pellentesque mattis enim nisi, a posuere tellus volutpat vitae. Sed risus est, laoreet sed arcu",
// "Open Hour",
// "Sun-Thu Open 10AM to 9PM",
// "Fri-Sat",
// "Closed",

const ExpertifyFooter = () => {
  return (
    <div className={styles.element}>
      <Image src={expertifyLogo} />
      {EXPERTIFY_DATA.map(({ text }, index) => (
        // <Paragraph text={text} size={size as SizeType} />
        <Typography tag="p" key={index}>
          {text}
        </Typography>
      ))}
    </div>
  );
};

export default ExpertifyFooter;
