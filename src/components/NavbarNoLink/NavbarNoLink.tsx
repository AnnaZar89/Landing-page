import { FC } from "react";
import { useState } from "react";
import MenuOpen from "../MenuOpen/MenuOpen";
import styles from "./NavbarNoLink.module.scss";
import Typography from "../../typography/Typography";

interface INavbarNoLink {
  text: string;
  icon?: JSX.Element;
}

const NavbarNoLink: FC<INavbarNoLink> = ({ text, icon }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Typography
        onClick={() => setMenuOpen(!menuOpen)}
        tag="p"
        className={styles.text}
      >
        {text} {icon}
      </Typography>

      {menuOpen && <MenuOpen />}
    </>
  );
};

export default NavbarNoLink;
