import "./App.css";
import Navbar from "./components/Navbar";
import PreNavBar from "./components/PreNavBar";
import NavOptions from "./components/NavOptions.jsx";
import Slider from "./components/Slider.jsx";
import Offers from "./components/Offers.jsx";
import Heading from "./components/Heading.jsx";
import StarProduct from "./components/StarProduct.jsx";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.jsx";
import HotAccessories from "./components/HotAccessories.jsx";
import PoductReviews from "./components/PoductReviews.jsx";
import Videos from "./components/Videos.jsx";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import data from "./data/data.json";
function App() {
  return (
    <div className="App">
      <Router>
        <PreNavBar />
        <Navbar />
        <NavOptions
          miPhones={data.miPhones}
          redmiPhones={data.redmiPhones}
          tv={data.tv}
          laptop={data.laptop}
          fitnessAndLifeStyle={data.fitnessAndLifeStyle}
          home={data.home}
          audio={data.audio}
          accessories={data.accessories}
        />
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Heading text="START PRODUCTS" />
        <StarProduct StarProduct={data.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />
        <Routes>
          <Route
            path="/"
            element={
              <HotAccessories
                music={data.hotAccessories.music}
                musicCover={data.hotAccessoriesCover.music}
              />
            }
          />
          <Route
            path="/smartDevice"
            element={
              <HotAccessories
                smartDevices={data.hotAccessories.smartDevice}
                smartDevicesCover={data.hotAccessoriesCover.smartDevice}
              />
            }
          />
          <Route
            path="/home"
            element={
              <HotAccessories
                home={data.hotAccessories.home}
                homeCover={data.hotAccessoriesCover.home}
              />
            }
          />
          <Route
            path="/lifeStyle"
            element={
              <HotAccessories
                lifeStyle={data.hotAccessories.lifeStyle}
                lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
              />
            }
          />
          <Route
            path="/mobieAccessories"
            element={
              <HotAccessories
                mobileAccessories={data.hotAccessories.mobileAccessories}
                mobileAccessoriesCover={
                  data.hotAccessoriesCover.mobileAccessories
                }
              />
            }
          />
        </Routes>
        <Heading text="PRODUCT REVIEWS" />

        <PoductReviews productReviews={data.productReviews} />

        <Heading text="VIDEOS" />

        <Videos videos={data.videos} />

        <Heading text="IN THE PRESS" />

        <Banner banner={data.banner} />

        <Footer footer={data.footer} />
      </Router>
    </div>
  );
}

export default App;
