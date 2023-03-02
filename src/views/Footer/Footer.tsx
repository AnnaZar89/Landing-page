import styles from "./Footer.module.scss";

import ExpertifyFooter from "../../components/ExpertifyFooter/ExpertifyFooter";
import QuickLink from "../../components/QuickLink/QuickLink";

const Footer = () => {
  const data = [
    "Home",
    "About Us",
    "Our Project",
    "Our Team",
    "Services",
    "Blog",
  ];
  const data2 = ["Testimonial", "FAQ", "404 Error", "How We Work", "Feature"];
  return (
    <div className={styles.element}>
      <ExpertifyFooter />
      <QuickLink textInTitle="Quick Link" data={data} additionalData={data2} />
    </div>
  );
};

export default Footer;
