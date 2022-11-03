import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import RegisterProdPage from "views/examples/RegisterProdPage";
import LandingPage from "views/examples/LandingPage.js";
import SignUpPage from "../src/views/index-sections/SignUp.js";
import HomePage from "views/examples/HomePage";
import ProfilePage from "views/examples/ProfilePage.js";
import ProfileAdminPage from "views/examples/ProfileAdminPage.js";
import MapaRegProdPage from "components/Headers/MapaRegProd.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
         <Route
          path="/home-page"
          render={(props) => <HomePage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/profilead-page"
          render={(props) => <ProfileAdminPage {...props} />}
        />
        <Route
          path="/maparegprod-page"
          render={(props) => <MapaRegProdPage {...props} />}
        />
        <Route
          path="/SignUp-page"
          render={(props) => <SignUpPage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          path="/registerprod-page"
          render={(props) => <RegisterProdPage {...props} />}
        />
        <Redirect to="/landing-page" />
        <Redirect from="/" to="/landing-page" />
      </Switch>
    </Switch>
  </BrowserRouter>
);
