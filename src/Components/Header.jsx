import React from "react";
import "../SCSS/Header.scss";
import WildLifeLogo from "./../Assets/WildLifeLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="header">
      <div className="menubar">
        <FontAwesomeIcon icon={faBars} size="xs" />
      </div>
      <div className="image">
        <img
          className="d-block w-100"
          src={WildLifeLogo}
          alt="Wild Life Logo"
        />
      </div>
      <div className="headerName">ABOUT US</div>
      <div className="headerName">PROJECTS</div>
      <div className="headerName">DONATE</div>
      <div className="icons">
        <FontAwesomeIcon icon={faFacebook} size="xs" />
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faInstagram} size="xs" />
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faTwitter} size="xs" />
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faYoutube} size="xs" />
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faBars} size="xs" />
      </div>
    </div>
  );
}
