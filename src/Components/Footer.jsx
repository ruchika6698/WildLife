import React from "react";
import "../SCSS/Footer.scss";
import WildLifeLogo from "./../Assets/WildLifeLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faPinterest
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
        <img
          className="wildLogo"
          src={WildLifeLogo}
          alt="Wild Life Logo"
        />
        <br/><br/>
        <div className="list">
            <div>ABOUT</div><div className="lines"></div>
            <div>NEWS</div><div className="lines"></div>
            <div>CONTACTS</div><div className="lines"></div>
            <div>GALLERY</div><div className="lines"></div>
            <div>DONATE</div>
        </div>
        <br/><br/>
        <div className="Icondiv">
            <div className="footerIcons">
                <FontAwesomeIcon icon={faFacebook} size="xs" />
            </div>
            <div className="footerIcons">
                <FontAwesomeIcon icon={faInstagram} size="xs" />
            </div>
            <div className="footerIcons">
                <FontAwesomeIcon icon={faTwitter} size="xs" />
            </div>
            <div className="footerIcons">
                <FontAwesomeIcon icon={faYoutube} size="xs" />
            </div>
            <div className="footerIcons">
                <FontAwesomeIcon icon={faPinterest} size="xs"/>
            </div>
        </div>
        <br/><br/><br/><br/>
        <div className="footerText">©  2020 Wildlife. All Rights Reserved. Privacy Policy</div>
    </div>
  );
}

