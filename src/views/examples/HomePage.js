import React, { useState, useRef, useMemo, useCallback } from 'react';
import { Link } from "react-router-dom";
import '../../components/Headers/App.css' 
import MapView from 'components/Headers/MapView';

// reactstrap components
import {
  Container,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col
} from "reactstrap";



// core components
import HomePageHeader from "components/Headers/HomePageHeader";
import IndexNavbar from 'components/Navbars/IndexNavbar';
import CarouselSection from "views/index-sections/Carousel";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import {Label, FormGroup} from "reactstrap";


function HomePage() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  
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
        <h3>
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </h3>
        </Col>
                  </Row>
        <DefaultFooter />
      
    </>
  );
}

export default HomePage;
