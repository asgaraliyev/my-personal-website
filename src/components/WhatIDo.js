import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import WebDeveloperIcon from "../icons/WebDeveloperIcon";
import SimpleCodingIcon from "../icons/SimpleCodingIcon";
import MobileAppIcon from "../icons/MobileAppIcon";

export default class WhatIDo extends Component {
  render() {
    const yellowColor = "#fce130";
    return (
      <section id="services" className="ftco-section">
        <div className="container mt-5">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span className="orange-is-new-black">
                <FormattedMessage
                  id="whatIDo"
                  defaultMessage="Nə edirəm?"
                ></FormattedMessage>
              </span>
              <h2>
                <FormattedMessage
                  id="myServices"
                  defaultMessage="Xidmətlərim"
                ></FormattedMessage>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services p-3 py-4 d-block text-center">
                <div className="icon mb-3">
                <MobileAppIcon
                    color={yellowColor}
                    width="100px"
                  ></MobileAppIcon>
                </div>
                <div className="media-body">
                  <h3 className="heading">IOS/Android Developer</h3>
                  <h3 className="heading">Mobil UI/UX Design</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services p-3 py-4 d-block text-center">
                <div className="icon mb-3">
                  <SimpleCodingIcon
                    color={yellowColor}
                    width="100px"
                  ></SimpleCodingIcon>
                </div>
                <div className="media-body">
                  <h3 className="heading">Automation</h3>
                  <h3 className="heading">Web Scraping</h3>
                  <h3 className="heading">Image Processing/OpenCV</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services p-3 py-4 d-block text-center">
                <div className="icon mb-3">
                  <WebDeveloperIcon
                    color={yellowColor}
                    width="100px"
                  ></WebDeveloperIcon>
                </div>
                <div className="media-body">
                  <h3 className="heading">Web Developer</h3>
                  <h3 className="heading">Responsive Design</h3>
                  <h3 className="heading">React</h3>
                  <h3 className="heading">AJAX/JSON</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
