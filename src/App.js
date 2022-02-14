import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import logoElaboxWhite from "./images/logo-wht.png";
import Home from "./Home";
import Rewards from "./Rewards";
import Faq from "./Faq";
import Order from "./Order";
import Contact from "./Contact";

export default function App() {
  const handleNewsLetterClick = () => {
    const newsLetterForm = document.querySelector(
      'div[data-form="f61462a7-16a6-11ec-96e5-06b4694bee2a"]'
    );
    if (newsLetterForm) {
      newsLetterForm.style.removeProperty("display");
      setTimeout(() => newsLetterForm.classList.add("active"), 0);
      newsLetterForm
        .querySelectorAll(
          'input:not([type="hidden"]):not([autocomplete="nope"]), a, button'
        )
        .forEach((element, index) =>
          element.setAttribute("tabindex", index + 1)
        );
    }
  };
  return (
    // <HttpsRedirect>
    <Router>
      <Navbar
        fixed="top"
        style={{ backgroundColor: "#004E98" }}
        className="navbar-dark"
      >
        <NavbarBrand href="/">
          <img
            src={logoElaboxWhite}
            className="img-fluid"
            alt=""
            style={{ height: "35px" }}
          ></img>
        </NavbarBrand>
        <Nav className="mr-auto navbar-dark">
          <NavItem>
            <NavLink href="/rewards" style={{ color: "white" }}>
              Rewards
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/faq" style={{ color: "white" }}>
              FAQ
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://store.elabox.com" style={{ color: "white" }}>
              Store
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ color: "white" }}
              href="#"
              onClick={handleNewsLetterClick}
            >
              Newsletter
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/rewards">
          <Rewards />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Row className="footer">
        <Col md="6" className="footerLeft">
          Powered by{" "}
          <a style={{ color: "white" }} href="https://www.elastos.org/">
            Elastos
          </a>{" "}
          <br />
          Privacy Policy <br />
          Terms of use <br />
        </Col>
        <Col md="6" className="footerRight">
          <a style={{ color: "white" }} href="/contact">
            Contact us
          </a>{" "}
          <br />
          <a style={{ color: "white" }} href="mailto:contact@elabox.com">
            Mail
          </a>{" "}
          <br />
          <a style={{ color: "white" }} href="https://twitter.com/Elaboxdotcom">
            Twitter
          </a>{" "}
          <br />
          <a style={{ color: "white" }} href="https://t.me/elabox_official">
            Telegram
          </a>{" "}
          <br />
          <a
            style={{ color: "white" }}
            href="https://discord.com/channels/916525578834829312/917054181116903534"
          >
            Discord
          </a>{" "}
        </Col>
      </Row>
    </Router>
    // </HttpsRedirect>
  );
}
