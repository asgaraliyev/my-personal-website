import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import WhatsappIcon from "../icons/WhatsappIcon";

export default class Footer extends Component {
  render() {
    const yellowColor = "#fce130";
    return (
      <footer id="footer" className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-5 text-center">
              <div className="ftco-footer-widget mb-5">
                <ul className="ftco-footer-social list-unstyled">
                  <li className="ftco-animate">
                    <a href="https://wa.me/+994555174401">
                      {/* database ile elaqe */}
                      <WhatsappIcon
                        nameOfClass="footer-icons social-icon"
                        color={yellowColor}
                        width="75%"
                      ></WhatsappIcon>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="https://www.facebook.com/asgar.aliyev.568/">
                      {/* database ile elaqe */}
                      <FacebookIcon
                        nameOfClass="footer-icons social-icon"
                        color={yellowColor}
                        width="75%"
                      ></FacebookIcon>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="https://www.instagram.com/asgaraliyev">
                      {/* database ile elaqe */}
                      <InstagramIcon
                        nameOfClass="footer-icons social-icon"
                        color={yellowColor}
                        width="75%"
                      ></InstagramIcon>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ftco-footer-widget">
                <h2 className="mb-3">
                  <FormattedMessage
                    id="contactWithMe"
                    defaultMessage="Mənimlə əlaqə qurun"
                  ></FormattedMessage>
                </h2>

                <a href="mailto:asgaraliyev2001@gmail.com">
                  asgaraliyev2001@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                <FormattedMessage
                  id="allRightsReserved"
                  defaultMessage=" Bütün hüquqları qorunur"
                ></FormattedMessage>{" "}
                ©
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
