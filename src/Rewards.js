
import React from "react";
import './index.css';
import faqHeader from './images/faq-img-1-1920.png'
import reward1 from './images/rewardPlot_1.jpeg'
import reward2 from './images/rewardPlot_2.jpeg'

export default function Rewards() {
  return (
    <div>
      {/* <img src={faqHeader} class="img-fluid"></img> */}
      <div style={{backgroundColor: 'white', paddingLeft: 50, paddingBottom: 100, paddingRight: 50, paddingTop: 100}}>
      <font className="sectiontitle">How does the Elabox reward sytem work?</font><br/>

      <span className={"mainText"}>
        <br/>
        The ElaboxSN is an Elastos Supernode that requires votes in order to receive Elastos rewards. The more votes, the higher it’s ranking in the DPoS system, and the more rewards it can give to box owners and voters. <br></br>
        The ElaboxSN objective is to incentivise and encourage longterm support for the Elabox network by attaching an Elastos reward for owning an Elabox and keeping it running 24/7.<br></br>
        The basic ElaboxSN model is as follows:<br></br>
        <ol>
        <li>Pay running costs / delegates / and reserve fund (explained below).</li>
        <li>Split the remaining rewards relatively evenly between voters and box owners.</li>
        </ol>

        For a detailed description of the ElaboxSN model, please refer to the graphs section below. <br/>
        <ul>
        <li>The ElaboxSN will run on AWS to start with and be maintained by the Enter Elastos team. The rewards will be split between box owners (limited to 108 per elaboxSN), voters and Enter Elastos delegates.</li>
        <li>The ElaboxSN has a max cap of 108 boxes per supernode. This number was chosen for its likeliness to always be more profitable than staking and 108 boxes is also the total number of Elastos dpos nodes. </li>
        <li>The ElaboxSN has a 20% reserve fund, Phase 1 is designed to fund new Elabox supernodes (ElaboxSN) that can be added together to increase rewards for the total number of Elaboxes in circulation. Every new ElaboxSN created from the reserve fund will allow another 108 Elaboxes to be added to  circulation.</li>
        <li>Although it is possible and encouraged to build and run your own type of Elabox yourself only the official Elabox network will receive ElaboxSN rewards,
        Elabox and ElaboxSN benefits.</li>
        {/* <li>Acts like a mini supernode with 108 delegates </li> */}
        <li>Staking rewards ROI will keep going down as more stakers join, but box owners form a type of delegate system by default, because of the limited number of boxes in circulation as compared to the unlimited amount of Elastos stakers there are.</li>
        {/* <li>The elabox is planning to also be a HIVE hardware storage as a service provider. The elabox is currently the only non technical way to earn rewards from Elastos HIVE. Users don’t need any technical knowledge they simply plug in as much hardware storage as they want to the elabox through it’s usb ports and start earning HIVE rewards when it’s ready.</li> */}
        {/* <li>Each individual elabox can be added as a node using the official Elastos wallets. So box owners don’t have to trust the elephant node or the official Elastos wallet node anymore. They can add their own elabox as their node of choice to the wallet. This is useful for any bag holder who wants peace of mind knowing that if the official wallet nodes go down, their wallets will continue to function normally. It also allows elabox owners to validate their own transactions themselves without needing to trust a third party for true Elastos self sovereignty.</li> */}
        {/* <li>In addition to supporting the public carrier network, it may also be possible for box owners to generate rewards by providing the elabox carrier network as a service for future Elastos dapps. Adding a hardware layer to Elastos opens the possibilities for dapp’s to create their own personalised or private carrier networks on demand within carrier to suit their own use cases and needs.</li>
        <li>Using the TOR browser, it will be possible to access your Elabox from the outside world.</li>
        <li>An elabox web app and built in wallet, make the elabox more accessible and user friendly to box owners</li> */}
        </ul>
        
      </span>

      <span>
      <font className="sectiontitle">ElaboxSN rewards distribution graphs</font><br/><br/>
        <center>
        <img src={reward1} className="reward1"/>
        <br/><b>Reward distribution of the ElaboxSN before the Elabox sales</b>
        <div style={{height:'100px'}}></div>
        <img src={reward2} className="reward1"/>
        <br/><b>Reward distribution of the ElaboxSN after the first Elabox starts running</b>
          {/* <div className="reward1"></div> */}
        </center></span>

        <span className={"smallText"}>
          <br/>
        Disclaimer 
        <br/>
        The ElaboxSN model and its delegates are a separate entity to the Elabox project and are under no obligation to support, provide or guarantee rewards to the Elabox. 
        All Elabox rewards generated by the ElaboxSN model are subject to change, stop, go offline, cancel or end at any time. All Elabox’s must be actively turned on and running in order to receive rewards from the ElaboxSN model.<br/><br/>
        </span>
      </div>

    </div>
  );
}