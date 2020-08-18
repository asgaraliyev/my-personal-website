import React, { Component } from 'react'

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
                        Salam mən
                      </a>
                    </p>
                    <h1
                      className="mb-3"
                      data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                    >
                      Əsgər Əliyev
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
                        Mən
                      </a>
                    </p>
                    <h1
                      className="mb-3"
                      data-scrollax="properties: {translateY: '30%', opacity: 1.6}"
                    >
                      Proqramçıyam
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
        )
    }
}
