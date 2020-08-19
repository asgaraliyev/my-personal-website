import React from "react";
import "./App.css";
import Interaction from "./components/Interaction";
import Coof from "./components/Coof";
import AboutMe from "./components/AboutMe";
import WhatIDo from "./components/WhatIDo";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MiniDrawer from "./components/Drawer";

function App() {
  return (
    <div className="App">
      <MiniDrawer></MiniDrawer>

      <div className="KW_progressContainer">
        <div id="progress-bar" className="KW_progressBar"></div>
      </div>
      <div id="colorlib-page">
        <Interaction></Interaction>
        <AboutMe></AboutMe>
        <WhatIDo></WhatIDo>
        <Portfolio></Portfolio>
        <Coof></Coof>
        <Contact></Contact>
        <Footer></Footer>
        {/* loader */}
        <div id="ftco-loader" className="show fullscreen">
          <svg className="circular" width="48px" height="48px">
            <circle
              className="path-bg"
              cx={24}
              cy={24}
              r={22}
              fill="none"
              strokeWidth={4}
              stroke="#eeeeee"
            />
            <circle
              className="path"
              cx={24}
              cy={24}
              r={22}
              fill="none"
              strokeWidth={4}
              strokeMiterlimit={10}
              stroke="#F96D00"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
