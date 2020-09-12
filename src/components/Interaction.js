import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
export default class Interaction extends Component {
  render() {
    return (
      <section className="home-slider owl-carousel js-fullheight">
        <div className="slider-item js-fullheight">
          <div className="overlay" />
          <div className="container">
            <div
              className="row slider-text align-items-center text-center justify-content-center"
              data-scrollax-parent="true"
            >
              <div
                className="col-md-12 ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <p>
                  <a href="#" className="scroll">
                    <FormattedMessage
                      id="hiIam"
                      defaultMessage="Salam mən"
                    ></FormattedMessage>
                  </a>
                </p>
                <h1
                  className="mb-3"
                  data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                >
                  <FormattedMessage
                    id="myName"
                    defaultMessage="Əsgər Əliyev"
                  ></FormattedMessage>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item js-fullheight">
          <div className="overlay" />
          <div className="container">
            <div
              className="row slider-text align-items-center text-center justify-content-center"
              data-scrollax-parent="true"
            >
              <div
                className="col-md-12 ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <p>
                  <a href="#" className="scroll">
                    <FormattedMessage
                      id="iam"
                      defaultMessage="Mən"
                    ></FormattedMessage>
                  </a>
                </p>
                <h1
                  className="mb-3"
                  data-scrollax="properties: {translateY: '30%', opacity: 1.6}"
                >
                  <FormattedMessage
                    id="programmer"
                    defaultMessage="Proqramçıyam"
                  ></FormattedMessage>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item js-fullheight">
          <div className="overlay" />
          <div className="container">
            <div
              className="row slider-text align-items-center text-center justify-content-center"
              data-scrollax-parent="true"
            >
              <div
                className="col-md-12 ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <p>
                  <a href="#" className="scroll">
                    Python,Flutter,Frontend{" "}
                  </a>
                </p>
                <h1
                  className="mb-3"
                  data-scrollax="properties: {translateY: '30%', opacity: 1.6}"
                >
                  Developer
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
