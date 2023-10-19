import React from "react";

function ExampleCarouselImage(props) {
  return (
    <img
      src={props.image}
      alt="Carousel"
      loading="lazy"
      height="400"
      width="600"
    ></img>
  );
}

export default ExampleCarouselImage;
