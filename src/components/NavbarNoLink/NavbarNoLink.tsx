import { FC } from "react";
import { useState } from "react";
import MenuOpen from "../MenuOpen/MenuOpen";
import styles from "./NavbarNoLink.module.scss";

interface INavbarNoLink {
  text: string;
  icon?: JSX.Element;
}

const NavbarNoLink: FC<INavbarNoLink> = ({ text, icon }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <p
        onClick={() => setMenuOpen(!menuOpen)}
        // className={menuOpen ? styles.element : ""}
      >
        {text} {icon}
      </p>
      {menuOpen && <MenuOpen />}
    </>
  );
};

export default NavbarNoLink;
