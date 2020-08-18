import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="ftco-footer ftco-bg-dark ftco-section">
            <div className="container">
              <div className="row mb-5 justify-content-center">
                <div className="col-md-5 text-center">
                  <div className="ftco-footer-widget mb-5">
                    <ul className="ftco-footer-social list-unstyled">
                      <li className="ftco-animate">
                        <a href="https://wa.me/burabaxilmalidi">
                          <span className="icon-whatsapp" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="burabaxilmalidi">
                          <span className="icon-facebook" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="https://www.instagram.com/burabaxilmalidi">
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="ftco-footer-widget">
                    <h2 className="mb-3">Mənimlə əlaqə qurun</h2>
                    <p className="h3 email">
                      <a href="#">burabaxilmalidi</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <p>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Bütün hüquqları qorunur ©
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}
