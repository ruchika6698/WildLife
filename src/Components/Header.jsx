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
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ListItem from "@material-ui/core/ListItem";

const styles = {
  list: {
    width: 500,
  },
  fullList: {
    width: "auto",
  },
};

class Header extends React.Component {
  state = {
    color: "transparent",
    right: false,
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
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List className="List">
          <ListItem className="Iconbutton">
              <ArrowBackIcon className="Arroeicon" />
          </ListItem>
          <Divider className="Divider" />
          <ListItem className="Listitems">HOME</ListItem>
          <Divider className="Divider" />
          <ListItem className="Listitems">PAGES</ListItem>
          <Divider className="Divider" />
          <ListItem className="Listitems">OUR TEAMS</ListItem>
          <Divider className="Divider" />
          <ListItem className="Listitems">PARTNERS</ListItem>
          <Divider className="Divider" />
          <ListItem className="Listitems">CONTACTS</ListItem>
          <Divider className="Divider" />
        </List>
      </div>
    );

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
              <FontAwesomeIcon
                icon={faBars}
                size="xs"
                onClick={this.toggleDrawer("right", true)}
              />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);
