import React from "react";
import "../../components/Headers/App.css";
import MapView from "components/Headers/MapView";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components
import HomePageHeader from "components/Headers/HomePageHeader";
import IndexNavbar from "components/Navbars/IndexNavbar";
import Carousel from "views/index-sections/Carousel";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function HomePage() {
  React.useEffect(() => {
    document.body.classList.add("Home-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);
  return (
    <>
      <IndexNavbar />
      <HomePageHeader />
      <br></br>
      <Row>
        <MapView />
        <br></br>
        <Col md="5">
          <div
            className="image-container image-right"
            style={{
              backgroundImage: "url(" + require("assets/img/bg1.jpg") + ")",
            }}
          ></div>
          <h3>
            Pasa el cursor cerca de tu punto mas cercano y veras en que momento
            se realizara el programa soverania alimentaria formoseña
          </h3>
        </Col>

        <Col md="3">
          <div
            className="image-container image-right"
            style={{
              backgroundImage: "url(" + require("assets/img/bg1.jpg") + ")",
            }}
          ></div>
          <h4>Momentos durante el Programa SAF</h4>
        </Col>
        <Carousel />
      </Row>
      <DefaultFooter />
    </>
  );
}

export default HomePage;
