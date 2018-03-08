import React from "react";
import Link from "gatsby-link";

// IMAGES IMPORT

import NatOne from "../../../layouts/img/nat-1-large.jpg";
import NatTwo from "../../../layouts/img/nat-2-large.jpg";
import NatThree from "../../../layouts/img/nat-3-large.jpg";

const About = () => (
  <section className="section-about">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">
        Exciting tours for adventurous people
      </h2>
    </div>

    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-small">
          You're going to fall in love with nature
        </h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur libero repellat quis consequatur ducimus
          quam nisi exercitationem omnis earum qui.
        </p>

        <h3 className="heading-tertiary u-margin-bottom-small">
          Live adventures like you never have before
        </h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          nulla deserunt voluptatum nam.
        </p>

        <a href="#" className="btn-text">
          Learn more &rarr;
        </a>
      </div>
      <div className="col-1-of-2">
        <div className="composition">
          <img
            src={NatOne}
            alt="Photo 1"
            className="composition__photo composition__photo--p1"
          />
          <img
            src={NatTwo}
            alt="Photo 2"
            className="composition__photo composition__photo--p2"
          />
          <img
            src={NatThree}
            alt="Photo 3"
            className="composition__photo composition__photo--p3"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
