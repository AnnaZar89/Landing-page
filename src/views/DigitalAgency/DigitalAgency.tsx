import Navbar from "../../components/Navbar/Navbar";
import styles from "./DigitalAgency.module.scss";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import Content from "../../components/Content/Content";
import Slide from "../../components/Slide/Slide";
import logoForHeader from "../../assets/images/logo-header.png";

const DigitalAgency = () => {
  return (
    <>
      <div className={styles.element}>
        <div className={styles.container}>
          <Logo logoImg={logoForHeader} />
          <Navbar />
          <Button text="Question A Quoto" classAdd="btnInHeader" />
        </div>
        <Content />
        <Slide />
      </div>
    </>
  );
};

export default DigitalAgency;
