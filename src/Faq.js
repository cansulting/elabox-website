
import React from "react";

import faqHeader from './images/faq-img-1-1920.png'

// const [isActive, setIsActive] = useState(false);

export default function Faq() {
  return (
    <div>
      <img src={faqHeader} class="img-fluid"></img>
      <div style={{backgroundColor: 'white', paddingLeft: 50, paddingBottom: 100, paddingRight: 50, paddingTop: 80}}>
      <font className="sectiontitle2">What is the Elabox?</font><br/>
      <span style={{fontSize:'1.2em'}}> 
      The Elabox is your secure and safe blockchain computer running several Elastos services. You will be running the ELA mainchain in addition to the DID sidechain and the Carrier network.</span><br/><br/>
      <font className="sectiontitle2">How do I earn rewards?</font><br/>
      <span style={{fontSize:'1.2em'}}>
        By running an Elabox you will automatically receive rewards from the Elabox SuperNode. The ElaboxSN is a supernode running on behalf of Elabox owners on the DPoS consensus mechanism of Elastos. The project is maintained thanks to a collaboration with the Enter Elastos team. Every Elabox owner running their Elabox will automatically get rewarded. The amount of the rewards are variable, for more information about how the reward system works, please refer to the <a href="/rewards">Rewards</a> section<br/><br/>
      </span>
      <font className="sectiontitle2">How much will it costs me to run an Elabox?</font><br/>
      <span style={{fontSize:'1.2em'}}>
        After starting your Elabox the only cost that you will incur will be the electricity bill. Based on calculation this amount should not exceed a few bucks per year (estimated to be less than USD 10 for the US).<br/><br/>
      </span>
      <font className="sectiontitle2">Why would I run an Elabox?</font><br/>
      <span style={{fontSize:'1.2em'}}>
        Not your node not your ELA. By running your own nodes you won't need to rely on any other node to send your transactions. You will only trust your own node and therefore increase the security of your transactions as well as your precious ELA. The integrated wallet is creating the transaction in the Elabox and sends it directly from your own node.<br/><br/>
      </span>
      <font className="sectiontitle2">How secure is the Elabox companion app?</font><br/>
      <span style={{fontSize:'1.2em'}}>
        The only way to access your companion app is via the local network. In addition, it is also possible to access your companion app from outside of your local network with the TOR browser. Your Elabox will generate a random .onion address that you can use to access it when you are not home. Based on these two facts the Elabox is highly secure against any attack. SSH connections are also disabled by default.<br/><br/>
      </span>
      <font className="sectiontitle2">How can I connect to my Elabox?</font><br/>
      <span style={{fontSize:'1.2em'}}>
        The companion webapp contains all the settings required to control your Elabox. However, if for some reasons you would like to connect to your Elabox directly you can plug a monitor and a keyboard to connect to it. At the command prompt you can use <b>elabox</b> as user and password to connect.<br/><br/>
      </span>
      <font className="sectiontitle2">What is included in the box?</font><br/>
      <span style={{fontSize:'1.2em'}}>
        You will receive an Elabox with additional 128 GB of storage, which is enough for several years of use. In addition, the box contains a USB-C power adapter (you might need an adapter based on your country) and an Ethernet cable to connect your Elabox to the Internet.<br/><br/>
      </span>
      <font className="sectiontitle2">When will my Elabox be shipped?</font><br/>
      <span style={{fontSize:'1.2em'}}>
      Due to semiconductor shortages and global shipping difficulties, securing RPi boards is tricky at the moment. New production starts early August, and we expect to get a reasonable number in late August or early September. We will update everyone when further information is available.<br/><br/>
      </span>
      <font className="sectiontitle2">Can I buy a Limited Edition in another cryptocurrency?</font><br/>
      <span style={{fontSize:'1.2em'}}>
      Sorry, the First 108 edition is only available for purchase in ELA. You can buy the regular Elabox in other cryptocurrencies, or in fiat.<br/><br/>
      </span>
      <font className="sectiontitle2">I don't want to buy a Limited Edition, when can I buy the regular Elabox.</font><br/>
      <span style={{fontSize:'1.2em'}}>
      It will be available after the public launch.<br/><br/>
      </span>
      <font className="sectiontitle2">Does this come with an NFT?</font><br/>
      <span style={{fontSize:'1.2em'}}>
      Currently, no.<br/><br/>
      </span>
      <font className="sectiontitle2">Are there plans to mint an NFT?</font><br/>
      <span style={{fontSize:'1.2em'}}>
      Yes! We are launching the First 108 as a limited edition and, as a gift, minting an NFT for early owners; giving it scarcity and value. We will make all necessary steps to make this happen. We are working with the Elastos Feeds Team to make it possible to claim a First 108 Elabox NFT. We will announce when this has been implemented.
      Not only is it a limited edition physically, the NFT provides digital proof of owning a First 108 Elabox.<br/><br/>
      </span>
      <font className="sectiontitle2">Will the 129 ELA price change if the market conditions change?</font><br/>
      <span style={{fontSize:'1.2em'}}>
      It is a fixed price. If you want an alternative, subsequent Elabox releases can be bought in ELA, and the price may vary depending on the market price of ELA.<br/><br/>
      </span>
      <font className="sectiontitle2">What wallet can we use to pay in ELA?</font><br/>
      <span style={{fontSize:'1.2em'}}>
      For now we only support the Elastos Essentials app.<br/><br/>
      </span>
      <font className="sectiontitle2">When can we buy in fiat or crypto?</font><br/>
      <span style={{fontSize:'1.2em'}}>
      On or after August 27th 2021.<br/><br/>
      </span>
      <font className="sectiontitle2">What other cryptocurrencies are supported?</font><br/>
      <span style={{fontSize:'1.2em'}}>
      BTC, ETH, and USDT(ERC20) are being considered as possibilities.<br/><br/>
      </span>
      <font className="sectiontitle2">What countries do you ship to?</font><br/>
      <span style={{fontSize:'1.2em'}}>
      Our current shipping courier is DHL so destinations they support are available for shipping.<br/><br/>
      </span>
      <font className="sectiontitle2">How much will shipping be?</font><br/>
      <span style={{fontSize:'1.2em'}}>
      It depends on your location, you can calculate your shipping fee on the checkout page by entering your address.<br/><br/>
      </span>
      </div>
    </div>
  );
}