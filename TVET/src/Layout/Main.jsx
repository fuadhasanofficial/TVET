// componet by fuad hasan

import "../../src/Components/common.css";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import Navbar from "../Components/Navbar";

const Main = () => {
  return (
    <div data-theme="ligth">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Main;
