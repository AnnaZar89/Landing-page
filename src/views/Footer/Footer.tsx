import styles from "./Footer.module.scss";

import ExpertifyFooter from "../../components/ExpertifyFooter/ExpertifyFooter";
import LinkInFooter from "../../components/LinkInFooter/LinkInFooter";

const Footer = () => {
  const data = [
    "Home",
    "About Us",
    "Our Project",
    "Our Team",
    "Services",
    "Blog",
  ];
  const dataInAddition = [
    "Testimonial",
    "FAQ",
    "404 Error",
    "How We Work",
    "Feature",
  ];
  const services = [
    "Web Design",
    "Developing",
    "Ui/Ux",
    "Graphic Design",
    "SEO",
  ];
  return (
    <div className={styles.element}>
      <ExpertifyFooter />
      <LinkInFooter
        textInTitle="Quick Link"
        data={data}
        additionalData={dataInAddition}
      />

      <LinkInFooter textInTitle="Our Service" data={services} />
    </div>
  );
};

export default Footer;
