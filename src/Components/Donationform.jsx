import React from "react";
import "../SCSS/Donationform.scss";
import Button from "react-bootstrap/Button";

export default class Donationform extends React.Component {
  state = {
    transition: "5s all ease-in-out"
  };

  ScrollEvent = (e) => {
    if (window.scrollY > 1050) {
      this.setState({  transition: "0s"});
    } else {
      this.setState({  transition: "5s all ease-in-out" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.ScrollEvent);
  }

  render() {
  return (
    <div className="Donationform">
      <div className="dropdown" style={{ transition: this.state.transition }}>
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
        <input type="text" className="name" PlaceHolder="Your Name" style={{ transition: this.state.transition }}></input>
      </div>
      <div>
        <input type="text" className="name" PlaceHolder="Email" style={{ transition: this.state.transition }}></input>
      </div>
      <div>
        <Button className="button" style={{ transition: this.state.transition }}>DONATE NOW</Button>
      </div>
    </div>
  );
}
}
