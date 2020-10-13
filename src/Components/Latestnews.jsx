import React from 'react';
import "../SCSS/Latestnews.scss";
import Carousel from "react-bootstrap/Carousel";

export default class Latestnews extends React.Component {
render() {
  return (
    <div className="Latestnews">
    <div>
        <div className="Latesttext">LATEST NEWS</div>
        <div className="Latestanimal">Latest News</div>
    </div>
        <br/><br/>
    <Carousel>
        <Carousel.Item>
        <div className="pagination">
            <div className="Information">
                <div className="date">JUL 02, 2019</div>
                <div className="Newstitle">COULD PUMA HUNTING BE HURTING MULE DEER?</div>
                <br/>
                <div className="Newsdescription">For years, harvesting pumas has been used as a way to maintain robust mule deer populations for hunters to target.</div>
            </div>
            <div className="Information">
                <div className="date">JUL 16, 2019</div>
                <div className="Newstitle">FUNDING JAGUAR CONSERVATION</div>
                <br/>
                <div className="Newsdescription">How is jaguar conservation related to fighting climate change? It might not seem like the two issues are connected but...</div>
            </div>
            <div className="Information">
                <div className="date">AUG 02, 2019</div>
                <div className="Newstitle">PROTECTING THE AMERICAS’ LARGEST WILD CATS</div>
                <br/>
                <div className="Newsdescription">Bridging borders to protect jaguars, rangers and scientists from Honduras and Guatemala are collecting</div>
            </div>
        </div>
        </Carousel.Item>

        <Carousel.Item>
        <div className="pagination">
            <div className="Information">
                <div className="date">JUL 02, 2019</div>
                <div className="Newstitle">PROTECTING TIGERS ON THE WATER IN THAILAND</div>
                <br/>
                <div className="Newsdescription">Protecting tigers is no easy task; it takes cooperation, dedication, and the ability to adapt. Since 2013, we have been working with our...</div>
            </div>
            <div className="Information">
                <div className="date">JUL 16, 2019</div>
                <div className="Newstitle">SEARCHING FOR SNOW LEOPARDS</div>
                <br/>
                <div className="Newsdescription">Known for their elusive nature, snow leopards are referred to by locals as “mountain ghosts” and are very hard to find in India. However, we...</div>
            </div>
            <div className="Information">
                <div className="date">AUG 02, 2019</div>
                <div className="Newstitle">AN INCREDIBLE FIRST FOR LIONS AND LEOPARDS</div>
                <br/>
                <div className="Newsdescription">Snares are silent killers laid by poachers across wild places to trap and kill animals for the illegal bushmeat trade. Every year across Africa’s...</div>
            </div>
        </div>
        </Carousel.Item>

        <Carousel.Item>
        <div className="pagination">
            <div className="Information">
                <div className="date">JUL 02, 2019</div>
                <div className="Newstitle">MODELING THE GHOST OF THE MOUNTAIN</div>
                <br/>
                <div className="Newsdescription">The snow leopard is a notoriously elusive species, inhabiting some of the most remote and inaccessible tracts of Central and South Asia. Still...</div>
            </div>
            <div className="Information">
                <div className="date">JUL 16, 2019</div>
                <div className="Newstitle">WHY SNARES ARE DANGEROUS THREATS TO WILDCATS</div>
                <br/>
                <div className="Newsdescription">Snares are silent killers laid by poachers across wild places to trap and kill animals for the illegal bushmeat trade. Every year across Africa’s...</div>
            </div>
            <div className="Information">
                <div className="date">AUG 02, 2019</div>
                <div className="Newstitle">NEPAL’S COMMUNITIES CAN COEXIST WITH FISHING CATS</div>
                <br/>
                <div className="Newsdescription">The fishing cat (Prionailurus viverrinus), also known as the “cat that barks” — for its dog-like barking vocalizations, is a small cat species. They are one....</div>
            </div>
        </div>
        </Carousel.Item>
       
    </Carousel>
    </div>
  );
}
}
