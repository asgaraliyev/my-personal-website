import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <nav id="colorlib-main-nav" role="navigation">
            <a
              href="#"
              className="js-colorlib-nav-toggle colorlib-nav-toggle active"
            >
              <i />
            </a>
            <div id="nav-bar" className="js-fullheight colorlib-table">
              <div
                className="img"
                style={{ backgroundImage: "burabaxilmalidi" }}
              />
              <div className="colorlib-table-cell js-fullheight">
                <div className="row no-gutters">
                  <div className="col-md-12 text-center have-margin">
                    <h1 className="mb-4">
                      <a href="/" className="logo">
                        Əsgər Əliyev
                      </a>
                    </h1>
                    <ul>
                      <li className="active">
                        <a href="/">
                          <span>Ev</span>
                        </a>
                      </li>
                      <li>
                        <a href="/about">
                          <span>Haqqımda</span>
                        </a>
                      </li>
                      <li>
                        <a href="/services">
                          <span>Xidmətlər</span>
                        </a>
                      </li>
                      <li>
                        <a href="/portfolio">
                          <span>Portfolio</span>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="/static/resume.pdf">
                          <span>CV</span>
                        </a>
                      </li>
                      <li>
                        <a href="/blog">
                          <span>Bloq</span>
                        </a>
                      </li>
                      <li>
                        <a href="/contact">
                          <span>Əlaqə</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )
    }
}
