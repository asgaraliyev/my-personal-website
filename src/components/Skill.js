import React, { Component } from 'react'
import Porgress from './Porgress'

export default class Skill extends Component {
    render() {
        const {name,progress}=this.props;
        return (
            <div className="col-md-6 animate-box">
            <div className="progress-wrap">
              <h4 className="left-side">{name}</h4>
              <Porgress progress={progress}></Porgress>
            </div>
          </div>
        )
    }
}
