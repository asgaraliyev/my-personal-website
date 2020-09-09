import React, { Component } from 'react'

export default class WhatIDo extends Component {
    render() {
        return (
            <section id="what-i-do" className="ftco-section">
            <div className="container mt-5">
              <div className="row justify-content-center mb-5 pb-5">
                <div className="col-md-7 text-center heading-section ftco-animate">
                  <span className="orange-is-new-black">Nə edirəm?</span>
                  <h2>Xidmətlərim</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services p-3 py-4 d-block text-center">
                    <div className="icon mb-3">
                      <span className="icon-layers" />
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
                      <span className="icon-gears" />
                    </div>
                    <div className="media-body">
                      <h3 className="heading">Web Developer</h3>
                      <h3 className="heading">Responsive Design</h3>
                      <h3 className="heading">HTML/CSS</h3>
                      <h3 className="heading">AJAX/JSON</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services p-3 py-4 d-block text-center">
                    <div className="icon mb-3">
                      <span className="icon-code" />
                    </div>
                    <div className="media-body">
                      <h3 className="heading">Automation</h3>
                      <h3 className="heading">Web Scraping</h3>
                      <h3 className="heading">Image Processing/OpenCV</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
