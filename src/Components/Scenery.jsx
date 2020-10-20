import React from "react";
import "../SCSS/Scenery.scss";
import Button from "react-bootstrap/Button";

export default class Scenery extends React.Component {
  state = {
    opacity: "0",
    transition: "4s all ease-in-out",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 550) {
      this.setState({ opacity: "1", transition: "4s all ease-in-out" });
    } else {
      this.setState({ opacity: "0" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div className="Scenery">
        <div className="Textdiv">
          <div
            className="Boldtext"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}
          >
            {" "}
            IT'S{" "}
          </div>
          <div
            className="time"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}
          >
            TIME
          </div>
          <div
            className="Boldtext"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}
          >
            TO ACT
          </div>
        </div>
        <br />
        <div>
          <Button
            className="Read"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}
          >
            READ MORE
          </Button>
        </div>
      </div>
    );
  }
}
