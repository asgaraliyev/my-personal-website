import React, { Component } from "react";
import OneCard from "./OneCard";
export default class Cards extends Component {
  render() {
    return (
      <div className="row no-gutters">
       
        <OneCard>  </OneCard>
        
        <OneCard>  </OneCard>
        <OneCard>  </OneCard>
        <OneCard>  </OneCard>

      </div>
    );
  }
}
