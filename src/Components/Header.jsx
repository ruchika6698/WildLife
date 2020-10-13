import React from "react";
import "../SCSS/Header.scss";
import WildLifeLogo from "./../Assets/WildLifeLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class Header extends React.Component {
  state = {
    color: "transparent",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 40) {
      this.setState({ color: "#444141" });
    } else {
      this.setState({ color: "transparent" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div>
        <AppBar style={{ backgroundColor: this.state.color }} elevation={0}>
          <Toolbar className="header">
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
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
