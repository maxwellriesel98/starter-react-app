import React from "react";
import { Link } from "react-router-dom";
import BodyTextCentered from "./BodyTextCentered";
import BodyImageRight from "./BodyImageRight";

function AboutPage() {
  return (
    <div>
      <BodyTextCentered
        heading="About Us"
        bodyText="Hac habitasse platea dictumst vestibulum rhoncus est. Scelerisque
          felis imperdiet proin fermentum leo vel orci porta. Risus commodo
          viverra maecenas accumsan. Fringilla urna porttitor rhoncus dolor
          purus non enim praesent elementum. Enim nunc faucibus a pellentesque.
          Vestibulum lorem sed risus ultricies tristique nulla aliquet. Volutpat
          consequat mauris nunc congue. Elit pellentesque habitant morbi
          tristique senectus et netus et malesuada. Purus in massa tempor nec
          feugiat nisl pretium fusce id. Auctor eu augue ut lectus arcu bibendum
          at varius vel. Ultricies leo integer malesuada nunc vel risus commodo.
          Nisi porta lorem mollis aliquam ut porttitor leo a diam. A lacus
          vestibulum sed arcu non odio. Congue nisi vitae suscipit tellus. Neque
          egestas congue quisque egestas diam in arcu cursus. Ornare quam
          viverra orci sagittis. Arcu non sodales neque sodales. Gravida dictum
          fusce ut placerat."
      />
      <BodyImageRight
        ImageRight={
          <iframe
            title="Baron Insurance Map Location"
            id="map_frame"
            className="imageBorder d-block mx-lg-auto "
            width="500"
            height="500"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.807398219928!2d-75.32495376753432!3d42.81355594768283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dbe0687c745049%3A0x8be65caaf48926f9!2s1874%20Gorton%20Lake%20Rd%2C%20West%20Edmeston%2C%20NY%2013485!5e0!3m2!1sen!2sus!4v1670866556895!5m2!1sen!2sus"
          ></iframe>
        }
        title1="Location & Hours:"
        par1={
          <div>
            <p>
              {" "}
              Open from 9:00 AM to 5:00 PM daily and Located at 1874 Gorton Lake
              Road West Edmeston. Before arriving, please be sure to fill out an
              appointment form on our{" "}
              <Link className="text-warning text-decoration-none" to="/contact">
                "Contact Us"
              </Link>{" "}
              page, or call us at (315) 927-7971, or email us directly at
              baroninsuranceagency@gmail.com.
            </p>
          </div>
        }
      />
    </div>
  );
}

export default AboutPage;
