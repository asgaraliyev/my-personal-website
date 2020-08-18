import React, { Component } from 'react'

export default class Coof extends Component {
    render() {
        return (
            <section className="ftco-section ftco-counter" id="section-counter">
            <div className="container">
              <div className="row justify-content-center mb-5 pb-5">
                <div className="col-md-7 text-center heading-section ftco-animate">
                  <h2>Portfolio</h2>
                </div>
              </div>
              <div className="row d-flex justify-content-start">
                <div className="col-md-5 col-sm-5 counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <span className="ftco-label">Müştərilər</span>
                      <strong className="number" data-number={10}>
                        0
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-md-5 col-sm-5 counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <span className="ftco-label">Bitmiş Layihələr</span>
                      <strong className="number" data-number={20}>
                        0
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-end">
                <div className="col-md-5 counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <span className="ftco-label">Bitirilmiş Kofelər</span>
                      <strong className="number" data-number={567}>
                        0
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
