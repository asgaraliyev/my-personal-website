import React, { Component } from 'react'
import Cards from './Cards'
import { FormattedMessage } from "react-intl";

export default class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio" className="ftco-section from-bottom-animation" >
            <div className="container">
              <div className="row justify-content-center mb-5 pb-5">
                <div className="col-md-7 text-center heading-section ftco-animate">
                  <span className="orange-is-new-black">Portfolio</span>
                  <h2>  <FormattedMessage
                    id="takeALookMyWorks"
                    defaultMessage="Mənim işlərimə göz gəzdirin !"
                  ></FormattedMessage></h2>
                </div>
              </div>
              <Cards></Cards>
            </div>
          </section>
        )
    }
}
