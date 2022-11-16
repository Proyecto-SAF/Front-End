import React from "react";
import "../../components/Headers/App.css";
import MapUsu from "components/Headers/MapUsu";

// reactstrap components
import { Row, Col, Alert, Container } from "reactstrap";

// core components
import HomePageHeader from "components/Headers/HomePageHeader";
import HomeNavbar from "components/Navbars/HomeNavbar";
import Carousel from "views/index-sections/Carousel";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import IndexHeader from "components/Headers/IndexHeader";

function HomePage() {
  const [alert2, setAlert2] = React.useState(true);
  React.useEffect(() => {
    document.body.classList.add("Home-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);
  return (
    <>
      <HomeNavbar />
      <IndexHeader />
      <br></br>
      <Row>
      <Alert color="info" isOpen={alert2}>
            <Container>
                 <button
              type="button"
              className="close"
              onClick={() => setAlert2(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button><h6>Haz click en el punto mas cercano y veras en que momento
            se realizara el programa soverania alimentaria formoseña.</h6>
         
          </Container>
        </Alert>
      <Container id="Map" className="text-center">
      <MapUsu />
      </Container>
        
        <br></br>
        <Col md="6">
          <div
            className="image-container image-right"
            style={{
              backgroundImage: "url(" + require("assets/img/bg1.jpg") + ")",
            }}
          ></div>
              
        </Col>

        <Col md="6">
          <div
            className="image-container image-right"
            style={{
              backgroundImage: "url(" + require("assets/img/bg1.jpg") + ")",
            }}
          ></div>
          <div className="typography-line">
                  <h2>
                   Momentos durante el Programa SAF
                  </h2>
                </div>
        </Col>
        <Carousel />
      </Row>
      <DefaultFooter />
    </>
  );
}

export default HomePage;
