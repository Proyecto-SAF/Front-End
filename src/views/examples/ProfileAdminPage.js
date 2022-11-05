import React from "react";
import MapView from "components/Headers/MapView";
// reactstrap components
import {
  Container,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

// core components
import ProfileNavbar from "components/Navbars/ProfileNavbar.js";
import ProfileAdminHeader from "components/Headers/ProfileAdminHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import { Label, FormGroup } from "reactstrap";

function ProfileAdminPage() {
  const [pills, setPills] = React.useState("2");
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
              <Col className="ml-auto mr-auto" md="10">
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons location_map-big"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons ui-1_calendar-60"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="9">
                        <h2 className="title">Mapa SAF</h2>
                        <p className="description">
                          Marca en este mapa donde se realizara el Prorgrama
                          SAF.
                        </p>
                        <MapView />
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="100">
                    <Row className="collections">
                      <div className="section section-contact-us text-center">
                        <Container>
                          <h2 className="title">Noticias!!</h2>
                          <p className="description">
                            En este espacio podras publicar noticias
                            relacionadas con el programa soverania alimentaria
                            Formoseña.
                          </p>
                          <Row>
                            <Col
                              className="text-center ml-auto mr-auto"
                              lg="6"
                              md="8"
                            >
                              <InputGroup
                                className={
                                  "input-lg" +
                                  (firstFocus ? " input-group-focus" : "")
                                }
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="now-ui-icons users_circle-08"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  placeholder="Titulo"
                                  type="text"
                                  onFocus={() => setFirstFocus(true)}
                                  onBlur={() => setFirstFocus(false)}
                                ></Input>
                              </InputGroup>
                              <div className="textarea-container">
                                <Input
                                  cols="80"
                                  name="name"
                                  placeholder="Noticia SAF"
                                  rows="4"
                                  type="textarea"
                                ></Input>
                              </div>
                              <div className="send-button">
                                <Button
                                  block
                                  className="btn-round"
                                  color="info"
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                  size="lg"
                                >
                                  PUBLICAR
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Col>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfileAdminPage;
