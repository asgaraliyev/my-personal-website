import React, { Component } from 'react'

export default class Porgress extends Component {
    render() {
        const {progress}=this.props
        return (
          <div style={{ width: `${progress}%` }} className="full-width">
                <div className="progress skill-bar">
            <div
              className="progress-bar color-1"
              role="progressbar"
            >
              <span>{progress}%</span>
            </div>
          </div>
          </div>
        )
    }
}
