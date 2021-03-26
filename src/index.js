import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { IntlProvider } from "react-intl";
import { azeri } from "./languages/az";
import { english } from "./languages/en";
import { Provider } from "react-redux";
import store from "./redux";
const local = navigator.language;
let lang;
if (localStorage.getItem("lang") == "English") {
  lang = english;
} else {
  lang = azeri;
}

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={local} messages={lang}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
