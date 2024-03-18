import styles from "./Navbar.module.scss";
import { Routes } from "../../routes";
import Link from "../Link/Link";
import SelectInput from "../Select/SelectInput";
import { servicesOption, blogOption } from "./options";

const Navbar = () => {
  return (
    <div className={styles.element}>
      <Link href={Routes.HOME} text="HOME" />
      <Link href={Routes.ABOUT} text="ABOUT" />
      <SelectInput options={servicesOption} defaultValue={servicesOption[0]} />
      <SelectInput options={blogOption} defaultValue={blogOption[0]} />
      <Link href={Routes.CONTACT} text="CONTACT" />
    </div>
  );
};

export default Navbar;
