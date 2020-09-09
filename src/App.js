import React from "react";
import "./App.css";
import MiniDrawer from "./components/Drawer";
import VisitorPage from "./VisitorPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import adminPanel from "./adminPanel";
function App() {
  return (
    <Router>
      <div className="App">
        <MiniDrawer></MiniDrawer>

        <div className="KW_progressContainer">
          <div id="progress-bar" className="KW_progressBar"></div>
        </div>
        <div id="colorlib-page">
            <Route path="/" exact component={VisitorPage}></Route>
            <Route path="/admin-panel"  component={adminPanel}></Route>
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
    </Router>
  );
}

export default App;
