import React from "react";
import "../SCSS/Ourprojects.scss";
import Button from "react-bootstrap/Button";

export default class Ourprojects extends React.Component {
  state = {
    opacity: "0",
    transition: "3s all ease-in-out",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 400) {
      this.setState({ opacity: "1", transition: "3s all ease-in-out"});
    } else {
      this.setState({ opacity: "0" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div className="Ourprojects">
        <div>
          <div
            className="projectText"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}
          >
            OUR PROJECTS
          </div>
          <div
            className="Message"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}
          >
            Help Animals Worldwide
          </div>
          <br />
          <div
            className="Textinfo"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}
          >
            Below are some of our recent charity projects that helped us
          </div>
          <div
            className="Textinfo"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}
          >
            protect wild cat species and save them from from retaliatory
          </div>
          <div
            className="Textinfo"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition
            }}
            elevation={0}
          >
            killings in 28 countries.
          </div>
        </div>
        <br />
        <br />
        <div className="Imagediv">
          <div>
            <div
              className="LionImage"
              style={{
                opacity: this.state.opacity,
                transition: this.state.transition,
              }}
              elevation={0}
            >
              <div className="DonationButtons">
                <Button className="Donatebutton">DONATE</Button>
              </div>
            </div>
            <br />
            <div className="Animalname">LIONS</div>
            <br />
            <div className="amount">$340K DONATED</div>
          </div>
          <div>
            <div
              className="CheetahsImage"
              style={{
                opacity: this.state.opacity,
                transition: this.state.transition,
              }}
              elevation={0}
            >
              <div className="DonationButtons">
                <Button className="Donatebutton">DONATE</Button>
              </div>
            </div>
            <br />
            <div className="Animalname">CHEETAHS</div>
            <br />
            <div className="amount">$550K DONATED</div>
          </div>

          <div>
            <div
              className="CubsImage"
              style={{
                opacity: this.state.opacity,
                transition: this.state.transition,
              }}
              elevation={0}
            >
              <div className="DonationButtons">
                <Button className="Donatebutton">DONATE</Button>
              </div>
            </div>
            <br />
            <div className="Animalname">TIGER CUBS</div>
            <br />
            <div className="amount">$610K DONATED</div>
          </div>
        </div>
      </div>
    );
  }
}
