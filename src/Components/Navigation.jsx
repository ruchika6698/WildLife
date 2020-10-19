import React from "react";
import "../SCSS/Navigation.scss";
import swiperslide1 from "./../Assets/swiperslide1.jpg";
import swiperslide2 from "./../Assets/swiperslide2.jpg";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={swiperslide1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <div className="Transparentdiv1"></div>
                    <div className="animationDiv">
                    <div className="Transparentdiv2"></div>
                    <div className="SaveText">SAVE</div></div>
                    <div className="wildCats">WILD CATS</div>
                    <div className="text">
                      Join Wildlife, the world’s leading charity foundation,
                      which main goal is to help conserve and protect wild cats
                      and other important animal species all over the globe.
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={swiperslide2}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <div className="Transparentdiv1"></div>
                    <div className="animationDiv">
                    <div className="Transparentdiv2"></div>
                    <div className="SaveText">MAKE</div></div>
                    <div className="wildCats">CATS SAFE</div>
                    <div className="text">
                      We work to help wild cats and other animals worldwide and
                      you can create their future with us. Your donations will
                      serve the great cause of serving animals globally!
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
