import React from "react";
import "./index.css";
import Telegram from "./images/telegram.png";
import Twitter from "./images/twitter.png";
import Discord from "./images/discord.png";
import Mail from "./images/mail.png";
export default function Rewards() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          paddingLeft: 50,
          paddingBottom: 100,
          paddingRight: 50,
          paddingTop: 100,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ textAlign: "center" }}>
            <a href="mailto:contact@elabox.com">
              <img src={Mail} width={144} height={144} />
              <h2>Mail</h2>
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/elabox_official"
            >
              <img src={Telegram} width={144} height={144} />
              <h2>Telegram</h2>
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/Elaboxdotcom"
            >
              <img src={Twitter} width={144} height={144} />
              <h2>Twitter</h2>
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.com/channels/916525578834829312/917054181116903534"
            >
              <img src={Discord} width={144} height={144} />
              <h2>Discord</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
