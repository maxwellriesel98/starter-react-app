import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";

function MyCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="caroDes container"
      fade
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <ExampleCarouselImage image={props.image1} text="First slide" />
        <Carousel.Caption>
          <h3>{props.FirstSlideLabel}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage image={props.image2} text="Second slide" />
        <Carousel.Caption>
          <h3>{props.SecondSlideLabel}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage image={props.image3} text="Third slide" />
        <Carousel.Caption>
          <h3>{props.ThirdSlideLabel}</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
