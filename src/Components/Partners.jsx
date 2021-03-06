import React from "react";
import "../SCSS/Partners.scss";
import Carousel from "react-bootstrap/Carousel";
import Partner1 from "./../Assets/Partner1.png";
import Partner2 from "./../Assets/Partner2.png";
import Partner3 from "./../Assets/Partner3.png";
import Partner4 from "./../Assets/Partner4.png";

export default class Partners extends React.Component {
  state = {
    opacity: "0",
    transition: "5s all",
    transform: "translate(-0%, -10%)",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 3700) {
      this.setState({
        opacity: "1",
        transition: "5s all ease-in-out",
      });
    } else {
      this.setState({ opacity: "0" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div className="Partners">
        <div>
          <div
            className="Partenertext"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}
          >
            PARTNERS
          </div>
          <div
            className="Parteneranimal"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}
          >
            Our Partners
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <Carousel>
            <Carousel.Item>
              <div
                className="Imageslider1"
                style={{
                  opacity: this.state.opacity,
                  transition: this.state.transition,
                }}
                elevation={0}
              >
                <img className="partner1" src={Partner1} alt="Partner" />
                <img className="partner1" src={Partner2} alt="Partner" />
                <img className="partner1" src={Partner3} alt="Partner" />
                <img className="partner1" src={Partner4} alt="Partner" />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div
                className="Imageslider1"
                style={{
                  opacity: this.state.opacity,
                  transition: this.state.transition,
                }}
                elevation={0}
              >
                <img className="partner1" src={Partner3} alt="Partner" />
                <img className="partner1" src={Partner4} alt="Partner" />
                <img className="partner1" src={Partner1} alt="Partner" />
                <img className="partner1" src={Partner2} alt="Partner" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}
