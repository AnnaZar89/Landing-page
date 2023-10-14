import { useEffect } from "react";
import { setLocalDarkMode } from "../src/helpers/darkMode";
import { useAppDispatch, useAppSelector } from "../src/store";
import DigitalAgency from "./views/DigitalAgency/DigitalAgency";
import "./App.css";
import AboutUs from "./views/AboutUs/AboutUs";
import Services from "./views/Services/Services";
import Feature from "./views/Feature/Feature";
import OurPortfolio from "./views/OurPortfolio/OurPortfolio";
import OurClient from "./views/OurClient/OurClient";
import OurTeam from "./views/OurTeam/OurTeam";
import PricingPlan from "./views/PricingPlan/PricingPlan";
import Testimonial from "./views/Testimonial/Testimonial";
import Blog from "./views/Blog/Blog";
import Footer from "./views/Footer/Footer";
import { setTheme } from "../src/store/themeReducer";

function App() {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const localTheme = localStorage.getItem("darkMode");

    if ((darkMode && !localTheme) || (darkMode && localTheme)) {
      // console.log({ darkMode, localTheme }, "1");
      setLocalDarkMode(darkMode);
    }

    if (!darkMode && localTheme) {
      // console.log({ darkMode, localTheme }, "2");
      dispatch(setTheme(localTheme === "true"));
    }
  }, [dispatch, darkMode]);

  return (
    <>
      <div className="App" style={{ width: "100%" }}>
        <DigitalAgency />
        <AboutUs />
        <Services />
        <Feature />
        <OurPortfolio />
        <OurClient />
        <OurTeam />
        <PricingPlan />
        <Testimonial />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
