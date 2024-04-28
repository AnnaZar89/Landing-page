import { FC } from "react";
import styles from "./Link.module.scss";

interface ILink {
  href: string;
  text: string;
  className?: string;
}
const Link: FC<ILink> = ({ href, text, className }) => {
  return (
    <a href={href} className={styles.element}>
      {text}
    </a>
  );
};

export default Link;
