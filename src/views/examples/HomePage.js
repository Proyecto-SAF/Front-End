import React from 'react';
import '../../components/Headers/App.css' 
import MapView from 'components/Headers/MapView';
import Iframe from 'react-iframe'

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";



// core components
import HomePageHeader from "components/Headers/HomePageHeader";
import IndexNavbar from 'components/Navbars/IndexNavbar';
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
        <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")"
                    }}
                  ></div>
        <h3>Pasa el cursor cerca de tu punto mas cercano y veras en que momento se 
          realizara el programa soverania alimentaria formoseña</h3>
          <div class="map">
          <Iframe allowFullScreen style="border: none;" height="500" width="600" src="http://localhost:8082/mapstore/#/context/RegionesPROD"></Iframe></div>  </Col>
                  </Row>
        <DefaultFooter />
      
    </>
  );
}

export default HomePage;
