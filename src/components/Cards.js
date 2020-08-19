import React, { Component } from "react";
import OneCard from "./OneCard";
import WorksConsumer from "../Context";
export default class Cards extends Component {
  render() {
    return (
      <WorksConsumer>
        {(value) => {
          const { works } = value;
          return (
            <div className=" no-gutters">
              {works.map((work) => {
                return <OneCard work={work}> </OneCard>;
              })}
            </div>
          );
        }}
      </WorksConsumer>
    );
  }
}
