import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './index.css';
import HttpsRedirect from 'react-https-redirect';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';
import logoElaboxWhite from './images/logo-wht.png'
import Home from './Home'
import Rewards from './Rewards'
import Faq from './Faq'
import Order from './Order'


export default function App() {

    return (
      // <HttpsRedirect>
      <Router>
        <Navbar fixed="top" style={{backgroundColor:"#004E98",}}  className="navbar-dark">
          <NavbarBrand href="/">
            <img src={logoElaboxWhite} className="img-fluid" alt="" style={{height:'35px'}}></img>
          </NavbarBrand>
          <Nav className="mr-auto navbar-dark">
          <NavItem>
              <NavLink href="/rewards" style={{color:'white'}}>Rewards</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/faq" style={{color:'white'}}>FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/order" style={{color:'white'}}>Pre-order</NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <Switch>
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
            Powered by <a style={{color: 'white'}} href="https://www.elastos.org/">Elastos</a> <br/>
            Privacy Policy <br/>
            Terms of use <br/>
          </Col>
          <Col md="6" className="footerRight">
          <a style={{color: 'white'}} href="mailto:contact@elabox.com">Contact us</a> <br/>
            <a style={{color: 'white'}} href="https://twitter.com/Elaboxdotcom">Twitter</a> <br/>
            <a style={{color: 'white'}} href="https://t.me/elabox_official">Telegram</a> <br/>
          </Col>
        </Row>
      </Router>
      // </HttpsRedirect>
    )
}