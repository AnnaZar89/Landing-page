import Navbar from "../../components/Navbar/Navbar";
import styles from "./DigitalAgency.module.scss";
import Logo from "../../components/Logo/Logo";
// import Button from "../../components/Button/Button";
import Toggle from "../../components/Toggle/Toggle";
import Content from "../../components/Content/Content";
import Slide from "../../components/Slide/Slide";
import logoForHeader from "../../assets/images/logo-header.png";
import { useState, useEffect } from "react";

const setMode = () => {
  const savedMode = localStorage.getItem("mode");
  return savedMode ? savedMode : "light";
};
const DigitalAgency = () => {
  const [toggleChecked, setToggleChecked] = useState(setMode());

  useEffect(() => {
    toggleChecked === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
    localStorage.setItem("mode", toggleChecked);
  }, [toggleChecked]);

  // useEffect(() => {
  //   if (toggleChecked) {
  //     document.documentElement.style.setProperty("--background-color", "white");
  //   } else {
  //     document.documentElement.style.setProperty("--background-color", "black");
  //   }
  //   localStorage.setItem("mode", JSON.stringify(toggleChecked));
  // }, [toggleChecked]);

  return (
    <>
      <div className={styles.element}>
        <div className={styles.container}>
          <Logo logoImg={logoForHeader} />
          <Navbar />
          <Toggle
            // onChange={() => setToggleChecked(!toggleChecked)}
            onChange={() => {
              setToggleChecked(toggleChecked === "dark" ? "light" : "dark");
            }}
            checked={toggleChecked === "light"}
          />
        </div>
        <Content />
        <Slide />
      </div>
    </>
  );
};

export default DigitalAgency;
