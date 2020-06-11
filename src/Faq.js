
import React from "react";

import faqHeader from './images/faq-img-1-1920.png'

export default function Faq() {
  return (
    <div>
      <img src={faqHeader} class="img-fluid"></img>
      <div style={{backgroundColor: 'white', paddingLeft: 50, paddingBottom: 100, paddingRight: 50}}>
      <font className="sectiontitle">What is the Elabox?</font><br/>
      <span style={{fontSize:'20px'}}> 
      The Elabox is your secure and safe blockchain computer running several Elastos services. You will be running the ELA mainchain in addition to the DID sidechain and the Carrier network.</span><br/><br/>
      <font className="sectiontitle">How do I earn rewards?</font><br/>
      <span style={{fontSize:'20px'}}>
        By running an Elabox you will automatically receive rewards from the Elabox SuperNode. The ElaboxSN is a supernode running on behalf of Elabox owners on the DPoS consensus mechanism of Elastos. The project is maintained thanks to a collaboration with the Enter Elastos team. Every Elabox owner running their Elabox will automatically get rewarded. The amount of the rewards are variable, for more information about how the reward system works, please refer to the <a href="/rewards">Rewards</a> section<br/><br/>
      </span>
      <font className="sectiontitle">How much will it costs me to run an Elabox?</font><br/>
      <span style={{fontSize:'20px'}}>
        After starting your Elabox the only cost that you will incur will be the electricity bill. Based on calculation this amount should not exceed a few bucks per year (estimated to be less than USD 10 for the US).<br/><br/>
      </span>
      <font className="sectiontitle">Why would I run an Elabox?</font><br/>
      <span style={{fontSize:'20px'}}>
        Not your node not your ELA. By running your own nodes you won't need to rely on any other node to send your transactions. You will only trust your own node and therefore increase the security of your transactions as well as your precious ELA. The integrated wallet is creating the transaction in the Elabox and sends it directly from your own node.<br/><br/>
      </span>
      <font className="sectiontitle">How secure is the Elabox companion app?</font><br/>
      <span style={{fontSize:'20px'}}>
        The only way to access your companion app is via the local network. In addition, it is also possible to access your companion app from outside of your local network with the TOR browser. Your Elabox will generate a random .onion address that you can use to access it when you are not home. Based on these two facts the Elabox is highly secure against any attack. SSH connections are also disabled by default.<br/><br/>
      </span>
      <font className="sectiontitle">How can I connect to my Elabox?</font><br/>
      <span style={{fontSize:'20px'}}>
        The companion webapp contains all the settings required to control your Elabox. However, if for some reasons you would like to connect to your Elabox directly you can plug a monitor and a keyboard to connect to it. At the command prompt you can use <b>elabox</b> as user and password to connect.<br/><br/>
      </span>
      <font className="sectiontitle">What is included in the box?</font><br/>
      <span style={{fontSize:'20px'}}>
        You will receive an Elabox with additional 128 GB of storage, which is enough for several years of use. In addition, the box contains a USB-C power adapter (you might need an adapter based on your country) and an Ethernet cable to connect your Elabox to the Internet.<br/>
      </span>
      </div>
    </div>
  );
}