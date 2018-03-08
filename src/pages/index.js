import React, { Component } from "react";
import Link from "gatsby-link";

// COMPONENTS
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

// WIDGET
import Popup from "../components/Popup";

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Main />
        <Footer />
        <Popup />
      </div>
    );
  }
}

export default IndexPage;
