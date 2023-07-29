import { ReactComponent as PhoneIcon } from "../../assets/icons/phone-icon-footer.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/email-icon-footer.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location-icon-footer.svg";
import { ReactNode } from "react";

export type ContactBoxT = {
  firstItem: string;
  secondItem: string;
  icon: ReactNode;
};

const quickLinkData: string[] = [
  "Home",
  "About Us",
  "Our Project",
  "Our Team",
  "Services",
  "Blog",
];
const additionalData: string[] = [
  "Testimonial",
  "FAQ",
  "404 Error",
  "How We Work",
  "Feature",
];
const servicesData: string[] = [
  "Web Design",
  "Developing",
  "Ui/Ux",
  "Graphic Design",
  "SEO",
];

const contactData: ContactBoxT[] = [
  {
    firstItem: "+1 763-227-5032",
    secondItem: "+1 763-227-5032",
    icon: <PhoneIcon />,
  },
  {
    firstItem: "info@domainname.com",
    secondItem: "construction@gmail.com",
    icon: <EmailIcon />,
  },
  {
    firstItem: "2752 Willison Street",
    secondItem: "Eagan, United State",
    icon: <LocationIcon />,
  },
];

export { quickLinkData, additionalData, servicesData, contactData };
