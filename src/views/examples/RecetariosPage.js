import React from "react";
import "../../components/Funcionales/App.css";

// reactstrap components
import {
  Row,
  Col,
  Container,
  Card,
  CardHeader,
  CardBody,
  TabContent,
} from "reactstrap";

// core components
import HomeNavbar from "components/Navbars/HomeNavbar";
import HomePageHeader from "components/Headers/HomePageHeader";
import DefaultFooter from "components/Footers/DefaultFooter";
import { Link } from "react-router-dom";

function RecetariosPage() {
  React.useEffect(() => {
    document.body.classList.add("recetarios-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("recetarios-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <HomeNavbar />
      <div className="wrapper">
        <HomePageHeader />
        <br></br>
        <Container>
          <Row>
            <Col md="4">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <TabContent className="text-center">
                    <Link to={`/pdf-page/${1}`} target="_blank">
                      <img
                        alt="..."
                        className="n-logo"
                        src={require("assets/img/PortadaPDF.png")}
                      ></img>
                    </Link>
                  </TabContent>
                </CardBody>
              </Card>
                      </Col>
                      <Col md="4">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <TabContent className="text-center">
                  <Link to={`/pdf-page/${2}`} target="_blank">
                      <img
                        alt="..."
                        className="n-logo"
                        src={require("assets/img/PortadaPDF_2.png")}
                      ></img>
                    </Link>
                  </TabContent>
                </CardBody>
              </Card>
                      </Col>
                      <Col md="4">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <TabContent className="text-center">
                  <Link to={`/pdf-page/${3}`} target="_blank">
                      <img
                        alt="..."
                        className="n-logo"
                        src={require("assets/img/PortadaPDF_3.png")}
                      ></img>
                    </Link>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <DefaultFooter />
    </>
  );
}

export default RecetariosPage;
