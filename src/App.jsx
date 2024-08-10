import "./App.css";

import Navbar from "./components/Navbar";
import IconicDestination from "./components/IconicDestination";
import FamilyTour from "./components/FamilyTour";
import HoneymoonTour from "./components/HoneymoonTour";
import Memories from "./components/Memories";
import PopularAttraction from "./components/PopularAttraction";
import Consultation from "./components/Consultation";
import Feedback from "./components/Feedback";
import Carousel from "./components/Carousel";

import FAQS from "./components/FAQS";

import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-[#e0d9b5]">
      <Navbar />
      <IconicDestination/>
      <FamilyTour/>
      <HoneymoonTour/>
      <Memories/>
      <PopularAttraction/>
      <Feedback/>
      <Carousel/>
      <Consultation/>
      <FAQS/>
      <Footer/>
    </div>
  );
}

export default App;
