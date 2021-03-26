import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

export default function Porgress({ progress }) {
  const [isVisible, setVisible] = useState(false);
  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        setVisible(isVisible);
      }}
    >
      <div style={{ width: `${progress}%` }} className="full-width">
        <div
          className="progress skill-bar"
          data-scroll={isVisible ? "in" : "out"}
        >
          <div className="progress-bar color-1" role="progressbar">
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
}
