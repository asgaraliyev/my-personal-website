import React, { Component } from 'react'
import Cards from './Cards'
export default class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio" className="ftco-section">
            <div className="container">
              <div className="row justify-content-center mb-5 pb-5">
                <div className="col-md-7 text-center heading-section ftco-animate">
                  <span className="orange-is-new-black">Portfolio</span>
                  <h2>Mənim işlərimə göz gəzdirin ! </h2>
                </div>
              </div>
              <Cards></Cards>
            </div>
          </section>
        )
    }
}
