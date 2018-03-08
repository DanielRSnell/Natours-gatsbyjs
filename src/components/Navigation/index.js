import React, { Component } from "react";
import Link from "gatsby-link";

var BgStyle = {
  transform: "scale(80)"
};

var NavStyle = {
  opacity: 1,
  width: "100%"
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navCheck: false,
      background: {},
      nav: {}
    };
  }

  ClickHandler() {
    if (this.state.navCheck === false) {
      console.log("Animate");
      this.setState({ navCheck: true, background: BgStyle, nav: NavStyle });
    } else {
      console.log("Disable");
      this.setState({ navCheck: false, background: {}, nav: {} });
    }
  }

  render() {
    return (
      <div className="navigation">
        <label
          for="navi-toggle"
          className="navigation__button"
          onClick={() => {
            this.ClickHandler();
          }}
        >
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background" style={this.state.background}>
          &nbsp;
        </div>
        <nav className="navigation__nav" style={this.state.nav}>
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>01</span>About Natour
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>02</span>Your benfits
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>03</span>Popular tours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>04</span>Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>05</span>Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
