import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Row, Col, Container, Jumbotron } from 'reactstrap';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';

import header from './images/header-img-main-1920px.png'
import coreFeatures from './images/core-features-img-1080px.png'
import iconDid from './images/icon-DID-gradient.png'
import iconCarrier from './images/icon-carrier-gradient.png'
import iconDashboard from './images/icon-dashboard-gradient.png'
import iconWallet from './images/icon-wallet-gradient.png'
import iconRewards from './images/rewards-blue-gradient-250.png'
import iconFullnode from './images/icon-fullnode-gradient.png'
import iconElabox from './images/icon-logo-gradient.png'



import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// class App extends Component {

//   render() {
    
//     return (
     
//       <div>
//         <Navbar fixed="top" style={{backgroundColor:"#004E98"}}  className="navbar-dark">
//           <NavbarBrand href="/">Elabox</NavbarBrand>
//           <Nav className="mr-auto navbar-dark">
//             <NavItem>
//               <NavLink href="/components/" style={{color:'white'}}>Features</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap" style={{color:'white'}}>FAQ</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap" style={{color:'white'}}>Pre-order</NavLink>
//             </NavItem>
//           </Nav>
//         </Navbar>

//       <img src={header} class="img-fluid"></img>

//       <Row style={{padding:'70px'}}>
//         <Col xs="12" style={{fontSize:'40px'}}>
//           <center>
//             <img src={iconElabox} class="img-fluid" alt=""></img><br/>
//             Elabox<br></br> <b>The most secure way to access the Decentralized Web</b>
//           </center>
//         </Col>
//       </Row>
      
//       {/* <Row>
//         <Col xs="6">
//           Elabox.<br></br> The most secure way to<br></br> access the Decentralized Web.
//         </Col>
//         <Col xs="6">.col-6</Col>
//       </Row>
//       <Row>
//         <Col>
        
//         </Col>
//       </Row> */}

//       {/* <img src={coreFeatures} class="img-fluid"></img> */}

    
//       <Row className="section">
//         <Col md="6">
//           <span  className="align-middle">
//             <center>
//               <img src={iconDid} class="img-fluid" alt=""></img>
//             </center>
//           </span>
//         </Col>
//         <Col md="6">
//           <span className="align-middle">
//           <font className="sectiontitle">Decentralized ID</font><br/>
//           Your Elabox will be running a full DID node and let you connect to the decentralized ID network. The decentralized ID allows you to own your data and share only what you want to share with a DApp.
//           </span>
//         </Col>
//       </Row>




//       <Row className="section" style={{backgroundColor:'#F2F2F2'}}>
//       <div className="col-md-6 " style={{paddingLeft:'50px'}}>
//           <span  className="align-middle">
//           <font className="sectiontitle">ELA mainchain</font><br/>
//           Your Elabox will be running a full ELA node. You will be able to use your own node to build, sign and send your transactions in a secure and trustless way.
//           </span>
//         </div>
//         <div className="col-md-6 order-first order-md-2">
//           <span  className="align-middle">
//             <center>
//               <img src={iconCarrier} class="img-fluid" alt=""></img>
//             </center>
//           </span>
//         </div>
//       </Row>

//       <Row className="section">
//         <Col md="6">
//           <span  className="align-middle">
//             <center>
//               <img src={iconDashboard} class="img-fluid" alt=""></img>
//             </center>
//           </span>
//         </Col>
//         <Col md="6">
//           <span className="align-middle">
//           <font className="sectiontitle">Advanced dashboard</font><br/>
//           By connecting to your Elabox dashboard you will be able to have full control over your own node. You will also see the most recent statistics for the services running on your box.
//           </span>
//         </Col>
//       </Row>


//       <Row className="section" style={{backgroundColor:'#F2F2F2'}}>
//       <div className="col-md-6 " style={{paddingLeft:'50px'}}>
//           <span  className="align-middle">
//           <font className="sectiontitle">Your Elabox, your wallet</font><br/>
//           You will be able to access your wallet via the dashboard and securely store your ELA in your Elabox. The Elabox is closed to any outside communication providing a better security.
//           </span>
//         </div>
//         <div className="col-md-6 order-first order-md-2">
//           <span  className="align-middle">
//             <center>
//               <img src={iconWallet} class="img-fluid" alt=""></img>
//             </center>
//           </span>
//         </div>
//       </Row>

//       <Row className="section">
//         <Col md="6">
//           <span  className="align-middle">
//             <center>
//               <img src={iconRewards} class="img-fluid" alt=""></img>
//             </center>
//           </span>
//         </Col>
//         <Col md="6">
//           <span className="align-middle">
//           <font className="sectiontitle">Advanced dashboard</font><br/>
//           By connecting to your Elabox dashboard you will be able to have full control over your own node. You will also see the most recent statistics for the services running on your box.
//           </span>
//         </Col>
//       </Row>

//       <Row className="section" style={{backgroundColor:'#F2F2F2'}}>
//       <div className="col-md-6 " style={{paddingLeft:'50px'}}>
//           <span  className="align-middle">
//           <font className="sectiontitle">Your Elabox, your wallet</font><br/>
//           You will be able to access your wallet via the dashboard and securely store your ELA in your Elabox. The Elabox is closed to any outside communication providing a better security.
//           </span>
//         </div>
//         <div className="col-md-6 order-first order-md-2">
//           <span  className="align-middle">
//             <center>
//               <img src={iconFullnode} class="img-fluid" alt=""></img>
//             </center>
//           </span>
//         </div>
//       </Row>

//       <Row className="footer">
//         <Col md="6">
//           Powered by Elastos
//         </Col>
//         <Col md="6">
//           sdfsdf
//         </Col>
//         </Row>
//     </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'))

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();
