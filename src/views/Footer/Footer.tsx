import ExpertifyFooter from "../../components/ExpertifyFooter/ExpertifyFooter";
import LinkInFooter from "../../components/LinkInFooter/LinkInFooter";
import ListBox from "../../components/ListBox/ListBox";
import List from "../../components/List/List";
import Heading from "../../typography/HeadingH2/HeadingH2";
import styles from "./Footer.module.scss";

import {
  quickLinkData,
  additionalData,
  servicesData,
  contactData,
} from "./mockData";
import ContactBox from "../../components/ContactBox/ContactBox";
import Container from "../../components/Container/Container";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.element}>
          {/* <div className={styles.element}> */}
          <ExpertifyFooter />
          <LinkInFooter
            title="Quick Link"
            data={quickLinkData}
            additionalData={additionalData}
          />
          <LinkInFooter
            title="Our Service"
            data={servicesData}
            className={styles.additionalStyles}
          />
          <ContactBox
            data={contactData}
            text="Contact Us"
            className={styles.additionalStyles}
          />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
