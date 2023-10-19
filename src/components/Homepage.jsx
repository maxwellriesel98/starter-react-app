import React from "react";
import MyCarousel from "./Carousel";
import BodyImageRight from "./BodyImageRight";
import BodyImageLeft from "./BodyImageLeft";
import image1 from "../Stonks.jpg";
import image2 from "../team.jpg";
import image3 from "../teentrading.jpg";
import crest from "../BaronCrest.png";

function HomePage() {
  return (
    <div>
      <MyCarousel
        image1={image1}
        image2={image2}
        image3={image3}
        FirstSlideLabel="First Slide Label"
        SecondSlideLabel="Second Slide Label"
        ThirdSlideLabel="Third Slide Label"
      />
      <BodyImageRight
        ImageRight={
          <img
            src={crest}
            className="imageBorder d-block mx-lg-auto img-fluid"
            alt="Baron Family Crest"
            width="300"
            height="400"
            loading="lazy"
          ></img>
        }
        title1="Personal or Business, We Can Help"
        par1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
      />
      <BodyImageLeft
        image1={
          <div>
            <img
              src={crest}
              className="imageBorder d-block mx-lg-auto img-fluid"
              alt="Baron Family Crest"
              width="300"
              height="400"
              loading="lazy"
            ></img>
            <p className="text-light"> Testimony PlaceHolder</p>
          </div>
        }
        title="Fast Refunds, Guaranteed"
        par1=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
            quam nulla porttitor massa id neque. Pellentesque adipiscing commodo
            elit at. Vulputate odio ut enim blandit volutpat maecenas volutpat.
            Leo a diam sollicitudin tempor id eu. Quam vulputate dignissim
            suspendisse in est ante in nibh. Ut eu sem integer vitae. Nulla
            facilisi morbi tempus iaculis urna id volutpat lacus. Ullamcorper
            sit amet risus nullam eget felis eget. Turpis tincidunt id aliquet
            risus feugiat in ante metus. Id velit ut tortor pretium. Quam
            pellentesque nec nam aliquam sem et tortor consequat. Purus ut
            faucibus pulvinar elementum. Metus aliquam eleifend mi in. Sed felis
            eget velit aliquet sagittis. Rhoncus mattis rhoncus urna neque
            viverra justo nec ultrices dui. Proin sagittis nisl rhoncus mattis
            rhoncus urna neque viverra justo. Vulputate dignissim suspendisse in
            est. Aliquet nec ullamcorper sit amet risus. Id cursus metus aliquam
            eleifend mi. Eget est lorem ipsum dolor sit amet."
        par2="  Quis lectus nulla at volutpat diam ut. Nulla at volutpat diam ut
            venenatis tellus. Elit ullamcorper dignissim cras tincidunt lobortis
            feugiat vivamus. Fermentum et sollicitudin ac orci phasellus
            egestas. Consectetur lorem donec massa sapien faucibus et molestie
            ac feugiat. Tincidunt augue interdum velit euismod in pellentesque
            massa placerat duis. Porttitor eget dolor morbi non arcu risus.
            Ornare arcu odio ut sem nulla. Est lorem ipsum dolor sit amet
            consectetur adipiscing elit pellentesque. Sollicitudin tempor id eu
            nisl nunc mi ipsum faucibus vitae. Nascetur ridiculus mus mauris
            vitae ultricies leo integer malesuada nunc. Urna id volutpat lacus
            laoreet non curabitur. Diam maecenas ultricies mi eget mauris. Urna
            id volutpat lacus laoreet non curabitur. Etiam erat velit
            scelerisque in dictum. Egestas integer eget aliquet nibh praesent
            tristique. Proin libero nunc consequat interdum."
      />{" "}
    </div>
  );
}

export default HomePage;
