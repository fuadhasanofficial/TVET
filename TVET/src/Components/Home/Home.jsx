// componet by fuad hasan

import Heading from "../Heading";
import Gallery from "../ImageGallary/Gallary";
import NoticeSection from "../Notice/NoticeSection";
import ServiceCards from "./Services";
import Slider from "./Slider";
import StickySocialLinks from "./Template";
const Home = () => {
  return (
    <div>
      <Slider />
      <Heading />
      <NoticeSection />

      <StickySocialLinks />
      <ServiceCards />

      <Gallery />
    </div>
  );
};

export default Home;
