import styles from "./Navbar.module.scss";
import { Routes } from "../../routes";
import NavbarBox from "../NavbarBox/NavbarBox";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";

const navbarData = [
  {
    name: "home",
    link: Routes.HOME,
  },
  {
    name: "about",
    link: Routes.ABOUT,
  },
  {
    name: "services",
    link: null,
    icon: <ArrowDown />,
  },
  {
    name: "blog",
    link: null,
    icon: <ArrowDown />,
  },
  {
    name: "contact",
    link: Routes.CONTACT,
  },
];

const Navbar = () => {
  return (
    <div className={styles.element}>
      {navbarData.map(({ name, link, icon }) => (
        <NavbarBox text={name} link={link} icon={icon} />
      ))}
    </div>
  );
};

export default Navbar;
