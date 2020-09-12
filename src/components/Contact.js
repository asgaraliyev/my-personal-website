import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";

export default class Contact extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        common: {
          white: "#fce130",
        },
        background: {
          paper: "#fce130",
        },
        text: {
          primary: "#fce130",
        },
        primary: {
          main: "#fce130",
          light: "#f5df53",
          dark: "#c7ac00",
        },
        secondary: {
          main: "#fce130",
          light: "#f5df53",
          dark: "#c7ac00",
        },
      },
    });

    console.log(theme);
    return (
      <MuiThemeProvider theme={theme}>
        <section id="contact" className="ftco-section contact-section">
          <div className="container mt-5">
            <div className="row d-flex mb-5 contact-info">
              <div className="col-md-12 mb-4">
                <h2 className="h4">
                  <FormattedMessage
                    id="contactİnfo"
                    defaultMessage="Əlaqə Məlumatları"
                  ></FormattedMessage>
                </h2>
              </div>
              <div className="w-100" />
              <div className="col-md-3">
                <p>
                  <span className="white-is-new-black"><FormattedMessage
                    id="address"
                    defaultMessage="Ünvan"
                  ></FormattedMessage>:</span>
                  <a href="https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&ll=40.3834610547961%2C49.89322599999999&spn=0.106519%2C0.149002&source=embed&mid=1hV1QxqkcgVAuETvSGJyGH18XbxY&z=13">
                    Baku,Azerbaijan
                  </a>
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  <span className="white-is-new-black"><FormattedMessage
                    id="phone"
                    defaultMessage="Telefon"
                  ></FormattedMessage></span>{" "}
                  <a href="tel://+994555174401">+994555174401</a>
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  <span className="white-is-new-black"><FormattedMessage
                    id="eMail"
                    defaultMessage="E-Poçt"
                  ></FormattedMessage></span>{" "}
                  <a href="mailto:asgaraliyev2001@gmail.com">
                    asgaraliyev2001@gmail.com
                  </a>
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  <span className="white-is-new-black"><FormattedMessage
                    id="websiteWord"
                    defaultMessage="Veb-Sayt"
                  ></FormattedMessage>:</span>{" "}
                  <a id="hostname" href="/"></a>
                </p>
              </div>
            </div>
            <div className="row block-9">
              <div className="col-md-6 pr-md-5">
                <form id="contact-form" action="#">
                  <div className="form-group">
                    <div className="col-3 input-effect">
                      <TextField
                        color="secondary"
                        className="contact-inputs"
                        id="outlined-basic"
                        label={<FormattedMessage
                          id="yourNameWord"
                          defaultMessage="Adınız"
                        ></FormattedMessage>}
                        variant="outlined"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-3 input-effect">
                      <TextField
                        type="tel"
                        color="secondary"
                        className="contact-inputs"
                        id="outlined-basic"
                        label={<FormattedMessage
                          id="phoneNumberWord"
                          defaultMessage="Telefon Nömrəsi"
                        ></FormattedMessage>}
                        variant="outlined"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-3 input-effect">
                      <TextField
                        className="contact-inputs"
                        multiline
                        id="outlined-basic"
                        label={<FormattedMessage
                          id="yourMessageWord"
                          defaultMessage="Mesajınız"
                        ></FormattedMessage>}
                        variant="outlined"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <Button
                      className="contact-inputs"
                      variant="contained"
                      color="primary"
                    >
                      <FormattedMessage
                          id="sendWord"
                          defaultMessage="Göndər"
                        ></FormattedMessage>
                    </Button>
                  </div>
                </form>
              </div>
              <div className="col-md-6" id="map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388948.3248466814!2d49.57477494848202!3d40.394254379738996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2s!4v1594586472273!5m2!1sen!2s"
                  frameBorder={0}
                  style={{ border: 0, width: "100%", height: "100%" }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </div>
          </div>
        </section>
      </MuiThemeProvider>
    );
  }
}
