import React from "react";
import MapView from "components/Headers/MapView";
// reactstrap components
import {
  Container,
  Col
} from "reactstrap";

// core components
import ProfileNavbar from "components/Navbars/ProfileNavbar.js";
import ProfileAdminHeader from "components/Headers/ProfileAdminHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ProfileAdminPage() {
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ProfileNavbar />
      <div className="wrapper">
        <ProfileAdminHeader />
        <div className="section">
          <Container>
          
          <Col md="5">
          <div
            className="image-container image-left"
            style={{
              backgroundImage: "url(" + require("assets/img/bg1.jpg") + ")",
            }}
          ></div>
          <h3>Marca en este mapa donde se realizara el Prorgrama SAF.
          </h3>
        </Col>
        <MapView />
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfileAdminPage;
