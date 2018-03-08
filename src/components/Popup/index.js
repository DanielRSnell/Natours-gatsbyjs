import React from "react";
import Link from "gatsby-link";

import NatEight from "../../layouts/img/nat-8.jpg";
import NatNine from "../../layouts/img/nat-9.jpg";

const Popup = () => (
  <div className="popup" id="popup">
    <div className="popup__content">
      <div className="popup__left">
        <img src={NatEight} alt="Tour photo" className="popup__img" />
        <img src={NatNine} alt="Tour photo" className="popup__img" />
      </div>
      <div className="popup__right">
        <a href="#section-tours" className="popup__close">
          &times;
        </a>
        <h2 className="heading-secondary u-margin-bottom-small">
          Start booking now
        </h2>
        <h3 className="heading-tertiary u-margin-bottom-small">
          Important &ndash; Please read these terms before booking
        </h3>
        <p className="popup__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed
          risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio
          facilisis mauris sit amet massa vitae. Mi bibendum neque egestas
          congue. Placerat orci nulla pellentesque dignissim enim sit. Vitae
          semper quis lectus nulla at volutpat diam ut venenatis.
        </p>
        <a href="#" className="btn btn--green">
          Book now
        </a>
      </div>
    </div>
  </div>
);
export default Popup;
