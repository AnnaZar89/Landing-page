import ExpertifyFooter from "../../components/ExpertifyFooter/ExpertifyFooter";
import LinkInFooter from "../../components/LinkInFooter/LinkInFooter";
import phoneIcon from "../../assets/icons/phone-icon-footer.svg";
import emailIcon from "../../assets/icons/email-icon-footer.svg";
import locationIcon from "../../assets/icons/location-icon-footer.svg";
import styles from "./Footer.module.scss";

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

  const contact = [
    [phoneIcon, ["+1 763-227-5032", "+1 763-227-5032"]],
    [emailIcon, ["info@domainname.com", "construction@gmail.com"]],
    [locationIcon, ["2752 Willison Street", "Eagan, United State"]],
  ];

  const contactData = [
    {
      name: "+1 763-227-5032",
      description: "+1 763-227-5032",
      icon: phoneIcon,
    },
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
      <LinkInFooter textInTitle="Contact Us" contactBox={contact} />
    </div>
  );
};

export default Footer;
