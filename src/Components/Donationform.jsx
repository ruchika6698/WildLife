import React from "react";
import "../SCSS/Donationform.scss";
import Button from "react-bootstrap/Button";

export default class Donationform extends React.Component {
  state = {
    opacity: "0",
    transition: "3s all ease-in-out",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 200) {
      this.setState({ opacity: "1", transition: "3s all ease-in-out" });
    } else {
      this.setState({ opacity: "0" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div className="Donationform">
        <div
          className="dropdown"
          style={{
            opacity: this.state.opacity,
            transition: this.state.transition,
          }}
          elevation={0}
        >
          <select name="Select An Amount" className="select">
            <option value="Select An Amount">Select An Amount</option>
            <option value="$100" className="option">
              $100
            </option>
            <option value="$200" className="option">
              $200
            </option>
            <option value="Other" className="option">
              Other
            </option>
          </select>
        </div>
        <div>
          <input
            type="text"
            className="name"
            PlaceHolder="Your Name"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
          ></input>
        </div>
        <div>
          <input
            type="text"
            className="name"
            PlaceHolder="Email"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
          ></input>
        </div>
        <div>
          <Button
            className="button"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
          >
            DONATE NOW
          </Button>
        </div>
      </div>
    );
  }
}
