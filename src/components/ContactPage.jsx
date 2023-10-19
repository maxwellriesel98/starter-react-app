import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Filler from "./Filler";
function ContactPage() {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_phya0rp",
        "template_2wk45bl",
        form.current,
        "fsrXxuDyimpGSPtpt"
      )
      .then(
        () => {
          navigate("/success");
        },
        () => {
          navigate("/failure");
        }
      );
  };

  return (
    <div className="container heroDes container px-4 pt-5  pb-3">
      <div className="bd-example m-0 border-0 row">
        <div className="col-5">
          <h2 className="fst-italic titlefont display-5 fw-light text-light lh-1 mb-3">
            Contact Us
          </h2>
          <br></br>
          <p className="text-light lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-light lead row">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="row g-3 col-2"></div>
        <form ref={form} onSubmit={sendEmail} className="row g-3 col-5">
          <div className="col-md-6">
            <label for="inputEmail" className="text-warning form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="inputEmail"
              placeholder="Email"
            ></input>
          </div>
          <div className="col-md-6">
            <label for="inputName" className="text-warning form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="inputName"
              placeholder="Full Name"
            ></input>
          </div>
          <div className="col-12">
            <label for="inputPhone" className="text-warning form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="inputPhone"
              name="inputPhone"
              placeholder="(123)-456-7890"
            ></input>
          </div>
          <div className="col-12">
            <label for="inputMessage" className="text-warning form-label">
              Message
            </label>
            <textarea
              rows="10"
              type="text-body"
              className="form-control"
              id="inputMessage"
              name="inputMessage"
              placeholder="Input message here (DO NOT ADD ANY SENSITIVE INFORMATION)"
            ></textarea>
          </div>

          <div className="col-12"></div>
          <div className="col-12">
            <button
              type="submit"
              className="d-grid col-12 btn-lg btn btn-primary"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <Filler />
      <Filler />
    </div>
  );
}

export default ContactPage;
