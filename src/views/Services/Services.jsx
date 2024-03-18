import styles from "../Services/Services.module.scss";
import { ReactComponent as AppDev } from "../../assets/icons/app-dev-service.svg";
import { ReactComponent as DigitalMarketing } from "../../assets/icons/digital-marketing-service.svg";
import { ReactComponent as GraphDesign } from "../../assets/icons/graphic-design-service.svg";
import { ReactComponent as UiUxDesign } from "../../assets/icons/ui-ux-design-service.svg";
import { ReactComponent as WebDesign } from "../../assets/icons/web-design-service.svg";
import { ReactComponent as WebDev } from "../../assets/icons/web-dev-service.svg";
import ServiceComponent from "../../components/ServiceComponent/ServiceComponent";
import Container from "../../components/Container/Container";
import Typography from "../../typography/Typography";

const Services = () => {
  return (
    <Container>
      <div className={styles.element}>
        <Typography tag="h3">Services</Typography>
        <Typography tag="h2">We Provide Best Creative Services.</Typography>
        <Typography tag="p">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't
        </Typography>
        <div className={styles.containerOfDiv}>
          <ServiceComponent
            number="01"
            icon={<UiUxDesign />}
            title="UI/UX Design"
            text="There are many variations of 
passages of Lorem Ipsum 
available, but the majority have"
            phrase="Learn More >>"
          />

          <ServiceComponent
            number="02"
            icon={<WebDev />}
            title="Web Development"
            text="There are many variations of 
passages of Lorem Ipsum 
available, but the majority have"
            phrase="Learn More >>"
          />
          <ServiceComponent
            number="03"
            icon={<DigitalMarketing />}
            title="Digital Marketing"
            text="There are many variations of 
          passages of Lorem Ipsum 
          available, but the majority have"
            phrase="Learn More >>"
          />

          <ServiceComponent
            number="04"
            icon={<GraphDesign />}
            title="Graphic Design"
            text="There are many variations of 
          passages of Lorem Ipsum 
          available, but the majority have"
            phrase="Learn More >>"
          />
          <ServiceComponent
            number="05"
            icon={<AppDev />}
            title="App Development"
            text="There are many variations of 
passages of Lorem Ipsum 
available, but the majority have"
            phrase="Learn More >>"
          />
          <ServiceComponent
            number="06"
            icon={<WebDesign />}
            title="Web Design"
            text="There are many variations of 
passages of Lorem Ipsum 
available, but the majority have"
            phrase="Learn More >>"
          />
        </div>
      </div>
    </Container>
  );
};

export default Services;
