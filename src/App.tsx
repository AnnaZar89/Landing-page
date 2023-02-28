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

function App() {
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
      </div>
    </>
  );
}

export default App;
