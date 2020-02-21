import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Row, Col, Container, Jumbotron } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Row,
  Col
} from 'reactstrap';

import header from './images/header-img-main-1920px.png'
import coreFeatures from './images/core-features-img-1080px.png'
import iconDid from './images/icon-DID-gradient.png'


// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

class App extends Component {

  render() {
    
    return (
      <div>
      <img src={header} class="img-fluid"></img>
      <Row>
        <Col xs="6">
          Elabox.<br></br> The most secure way to<br></br> access the Decentralized Web.
        </Col>
        <Col xs="6">.col-6</Col>
      </Row>
      <Row>
        <Col>
        
        </Col>
      </Row>

      <img src={coreFeatures} class="img-fluid"></img>

      <Row>
        <Col xs="6 align-self-center">
          <span  className="align-middle">
            <center>
              <img className="align-middle" src={iconDid} style={{widht:'150px', height:'150px'}}></img>
            </center>
          </span>
        </Col>
        <Col xs="6 align-self-center">
          <div style={{alignSelf: 'center'}}>
          DID.<br/>
          Your Elabox will be running a full DID node and let you connect 
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="6">
          <span  className="align-middle">
            <center>
              <img src={iconDid} class="img-fluid" alt=""></img>
            </center>
          </span>
        </Col>
        <Col xs="6">
          <span  className="align-middle">
          DID.
          Your Elabox will be running a full DID node and let you connect 
          </span>
        </Col>
      </Row>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
