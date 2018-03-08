import React, { Component } from "react";
import Link from "gatsby-link";

var style = {
  opacity: 0,
  "::after": {
    opacity: 1
  }
};

class Book extends Component {
  state = {
    left: {},
    right: {}
  };

  ClickHandler(props) {
    if (props === "left") {
      this.setState({ left: style, right: {} });
    } else {
      this.setState({ left: {}, right: style });
    }
  }

  render() {
    return (
      <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">Start booking now</h2>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Full name"
                    id="name"
                    required
                  />
                  <label for="name" className="form__label">
                    Full name
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Email address"
                    id="email"
                    required
                  />
                  <label for="email" className="form__label">
                    Email address
                  </label>
                </div>

                <div className="form__group u-margin-bottom-medium">
                  <div
                    className="form__radio-group"
                    onClick={() => {
                      this.ClickHandler("left");
                    }}
                  >
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="large"
                      name="size"
                    />
                    <label for="large" className="form__radio-label">
                      <span
                        className="form__radio-button"
                        style={this.state.left}
                      />
                      Small tour group
                    </label>
                  </div>

                  <div
                    className="form__radio-group"
                    onClick={() => {
                      this.ClickHandler("right");
                    }}
                  >
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="large"
                      name="size"
                    />
                    <label for="large" className="form__radio-label">
                      <span
                        className="form__radio-button"
                        style={this.state.right}
                      />
                      Large tour group
                    </label>
                  </div>
                </div>

                <div className="form__group">
                  <button className="btn btn--green">Next step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Book;
