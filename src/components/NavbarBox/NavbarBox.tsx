import { FC } from "react";
import styles from "./NavbarBox.module.scss";
import { Routes } from "../../routes";
import Link from "../Link/Link";
import NavbarNoLink from "../NavbarNoLink/NavbarNoLink";

interface INavbarBox {
  text: string;
  link: Routes | null;
  icon?: JSX.Element;
}
const NavbarBox: FC<INavbarBox> = ({ text, link, icon }) => {
  return (
    <div className={styles.element}>
      {link ? (
        <Link href={link} text={text} />
      ) : (
        <NavbarNoLink text={text} icon={icon} />
      )}
    </div>
  );
};

export default NavbarBox;
