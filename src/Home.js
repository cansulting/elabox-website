import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Row, Col, Container, Jumbotron } from 'reactstrap';
import {
  Row,
  Col
} from 'reactstrap';

import header from './images/header-img-main-1920px.png'

import iconDid from './images/icon-DID-gradient.png'
import iconCarrier from './images/icon-carrier-gradient.png'
import iconDashboard from './images/icon-dashboard-gradient.png'
import iconWallet from './images/icon-wallet-gradient.png'
import iconRewards from './images/rewards-blue-gradient-250.png'
import iconFullnode from './images/mainchain-gradient.png'
import iconElabox from './images/icon-logo-gradient.png'


export default function Home() {
  return (
    <div>

    <div className="bg-cover"></div>
  {/* <img src={header} class="img-fluid" alt=""></img> */}

  <Row style={{padding:'70px', backgroundColor:'white'}}>
    <Col xs="12" style={{fontSize:'40px'}}>
      <div className="mainsection">
      <center>
        Elabox<br></br> 
        <b>The most secure way to access the Decentralized Web</b> <br/>
        <b>and keep your digital assets secure</b>
      </center>
      </div>
    </Col>
  </Row>
  
  {/* <Row>
    <Col xs="6">
      Elabox.<br></br> The most secure way to<br></br> access the Decentralized Web.
    </Col>
    <Col xs="6">.col-6</Col>
  </Row>
  <Row>
    <Col>
    
    </Col>
  </Row> */}
   <div className="core-features"></div>

  <Row style={{padding: '30px',backgroundColor: 'white', alignSelf:'center', justifyContent:'center',textAlign:'center'}}>
    <Col md="4">
      <span  className="align-middle">
        <center>
          <div className="iconfullnode"></div>
        </center>
      </span>
      <br/>
      <font className="sectiontitle">ELA mainchain</font><br/>
      Your Elabox will be running a full ELA node. With your node you can: build, sign and send transactions with security and trust.
    </Col>
    <Col md="4">
    <span  className="align-middle">
        <center>
          <div className="iconcarrier"></div>
        </center>
      </span>
      <br/>
      <font className="sectiontitle">Carrier</font><br/>
      Your Elabox is an active element of the Carrier P2P network. By running an active Carrier node you strengthen the network and in turn this provides better security for the whole ecosystem
    </Col>
    <Col md="4">
    <span  className="align-middle">
        <center>
        <div className="icondid"></div>
        </center>
      </span>
      <br/>
      <font className="sectiontitle">Decentralized ID</font><br/>
      Your Elabox will also be running a full Decentralized Identity (DID) node.  This allows you to connect to the DID network and own your own data.  With DIDs you can share only what you choose to share with any DApp.
    </Col>
  </Row>


  <Row style={{padding: '30px',backgroundColor: 'white', alignSelf:'center', justifyContent:'center',textAlign:'center', paddingBottom: 50}}>
    <Col md="4">
      <span  className="align-middle">
        <center>
          <div className="iconwallet"></div>
        </center>
      </span>
      <br/>
      <font className="sectiontitle">Your Elabox, your wallet</font><br/>
      You will be able to access your Elastos wallet via the dashboard and store your ELA in your Elabox securely.  Like a bank vault, the Elabox is closed to any outside communication.
    </Col>
    <Col md="4">
    <span  className="align-middle">
        <center>
        <div className="iconrewards"></div>
        </center>
      </span>
      <br/>
      <font className="sectiontitle">Receive automatic rewards</font><br/>
      Anyone can stake ELA and receive rewards from the Decentralized Proof of Stake (DPoS) consensus.  As an Elabox owner you will automatically receive rewards from the Elabox super node.  
    </Col>
    <Col md="4">
    <span  className="align-middle">
        <center>
        <div className="icondashboard"></div>
        </center>
      </span>
      <br/>
      <font className="sectiontitle">Advanced dashboard</font><br/>
      By unlocking and opening your private Elabox dashboard you have full control over your own node. On your dashboard you will also find the most recent statistics for the services running on your box.
    </Col>
  </Row>



  {/* <Row className="section2">
    <Col md="6">
      <span  className="align-middle">
        <center>
          <img src={iconFullnode} class="img-fluid" alt=""></img>
        </center>
      </span>
    </Col>
    <Col md="6">
      <span className="align-middle">
      <font className="sectiontitle">ELA mainchain</font><br/>
      Your Elabox will be running a full ELA node. You will be able to use your own node to build, sign and send your transactions in a secure and trustless way.
      </span>
    </Col>
  </Row> */}




  {/* <Row className="section1">
  <div className="col-md-6 " style={{paddingLeft:'50px'}}>
      <span  className="align-middle">
      <font className="sectiontitle">Carrier</font><br/>
      Your Elabox is an active element of the Carrier P2P network. You will be running an active Carrier node and strengthen the network by providing better security.
      </span>
    </div>
    <div className="col-md-6 order-first order-md-2">
      <span  className="align-middle">
        <center>
          <img src={iconCarrier} class="img-fluid" alt=""></img>
        </center>
      </span>
    </div>
  </Row> */}

  {/* <Row className="section2">
    <Col md="6">
      <span  className="align-middle">
        <center>
          <img src={iconDid} class="img-fluid" alt=""></img>
        </center>
      </span>
    </Col>
    <Col md="6">
      <span className="align-middle">
      <font className="sectiontitle">Decentralized ID</font><br/>
      Your Elabox will be running a full DID node and let you connect to the decentralized ID network. The decentralized ID allows you to own your data and share only what you want to share with a DApp.
      </span>
    </Col>
  </Row> */}

  {/* <Row className="section1">
  <div className="col-md-6 " style={{paddingLeft:'50px'}}>
      <span  className="align-middle">
      <font className="sectiontitle">Your Elabox, your wallet</font><br/>
      You will be able to access your wallet via the dashboard and securely store your ELA in your Elabox. The Elabox is closed to any outside communication providing a better security.
      </span>
    </div>
    <div className="col-md-6 order-first order-md-2">
      <span  className="align-middle">
        <center>
          <img src={iconWallet} class="img-fluid" alt=""></img>
        </center>
      </span>
    </div>
  </Row> */}

  {/* <Row className="section2">
    <Col md="6">
      <span  className="align-middle">
        <center>
          <img src={iconRewards} class="img-fluid" alt=""></img>
        </center>
      </span>
    </Col>
    <Col md="6">
      <span className="align-middle">
      <font className="sectiontitle">Receive automatic rewards</font><br/>
      As an Elabox owner you will automatically take part in the DPoS consensus and receive rewards from the ElaboxSN (in collaboration with the Enter Elastos team)
      </span>
    </Col>
  </Row> */}

  {/* <Row className="section1" >
  <div className="col-md-6 " style={{paddingLeft:'50px'}}>
      <span  className="align-middle">
      <font className="sectiontitle">Advanced dashboard</font><br/>
      By connecting to your Elabox dashboard you will be able to have full control over your own node. You will also see the most recent statistics for the services running on your box.
      </span>
    </div>
    <div className="col-md-6 order-first order-md-2">
      <span  className="align-middle">
        <center>
          <img src={iconDashboard} class="img-fluid" alt=""></img>
        </center>
      </span>
    </div>
  </Row> */}

</div>    
  );
}


