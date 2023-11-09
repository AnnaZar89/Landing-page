import Navbar from "../../components/Navbar/Navbar";
import styles from "./DigitalAgency.module.scss";
import Image from "../../components/Image/Image";
// import Button from "../../components/Button/Button";
import Toggle from "../../components/Toggle/Toggle";
import Content from "../../components/Content/Content";
import Slide from "../../components/Slide/Slide";
import logoForHeader from "../../assets/images/logo-header.png";
import { useState, useEffect } from "react";
import { setLocalDarkMode } from "../../helpers/darkMode";
import { useAppDispatch, useAppSelector } from "../../store";
import { setTheme } from "../../store/themeReducer";

// const setMode = () => {
//   const savedMode = localStorage.getItem("mode");
//   return savedMode ? savedMode : "light";
// };
const DigitalAgency = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();

  const handleDarkModeChange = () => {
    // sdarkMode);etIsDarkMode(!isDarkMode);
    setLocalDarkMode(!darkMode);
    dispatch(setTheme(!darkMode));
  };

  return (
    <>
      <div className={styles.element}>
        <div className={styles.container}>
          <Image src={logoForHeader} />
          <Navbar />
          <Toggle onChange={handleDarkModeChange} checked={!darkMode} />
        </div>
        <Content />
        <Slide />
      </div>
    </>
  );
};

export default DigitalAgency;
