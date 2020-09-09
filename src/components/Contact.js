import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';




export default class Contact extends Component {
  
  render() {
    const theme = createMuiTheme({
      palette: {
        common:{
          white:"#fce130"
        },
        background:{
          paper:"#fce130"
        },
        text:{
          primary:"#fce130"
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
              <h2 className="h4">Əlaqə Məlumatları</h2>
            </div>
            <div className="w-100" />
            <div className="col-md-3">
              <p>
                <span className="white-is-new-black">Ünvan:</span> 
                <a href="/">burabaxilmalidi</a>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span className="white-is-new-black">Telefon:</span>{" "}
                <a href="tel://burabaxilmalidi">burabaxilmalidi</a>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span className="white-is-new-black">E-Poçt:</span>{" "}
                <a href="mailto:burabaxilmalidi">burabaxilmalidi</a>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span className="white-is-new-black">Veb-Sayt:</span>{" "}
                <a href="burabaxilmalidi">burabaxilmalidi</a>
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
                      label="Adınız"
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
                      label="Telefon Nömrəsi"
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
                      label="Mesajınız"
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
                    Göndər
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
