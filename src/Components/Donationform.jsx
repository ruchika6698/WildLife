import React from "react";
import "../SCSS/Donationform.scss";
import Button from "react-bootstrap/Button";

export default function Donationform() {
  return (
    <div className="Donationform">
      <div className="dropdown">
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
        <input type="text" className="name" PlaceHolder="Your Name"></input>
      </div>
      <div>
        <input type="text" className="name" PlaceHolder="Email"></input>
      </div>
      <div>
        <Button className="button">DONATE NOW</Button>
      </div>
    </div>
  );
}
