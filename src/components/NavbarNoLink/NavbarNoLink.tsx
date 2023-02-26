import { FC } from "react";
import { useState } from "react";
import MenuOpen from "../MenuOpen/MenuOpen";

interface INavbarBox {
  text: string;
  icon?: JSX.Element;
}

const NavbarNoLink: FC<INavbarBox> = ({ text, icon }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <p onClick={() => setMenuOpen(!menuOpen)}>
        {text} {icon}
      </p>
      {menuOpen && <MenuOpen />}
    </>
  );
};

export default NavbarNoLink;
