import React, { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import { ThemeProvider } from "@material-ui/core/styles";
import MuiTheme from "./config/theme";
import { BrowserRouter as Router } from "react-router-dom";

/**
 * {
 *  name: App,
 *  state: [
 *    "dark",
 *    "counter"
 *  ],
 *  currentState: 1
 * }
 *
 * setTheme: (value) => {if (state[0] !== value) {state[0] = value; React.rerender()}}
 * setCounter: (value) => {if (state[1] !== value) {state[1] = value; React.rerender()}}
 */
/**
 * Exo 1: Créer un bouton qui va permettre d'ouvrir la modal
 */
function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <Router>
        <Page />
      </Router>
    </ThemeProvider>
  );
}
/**
 *
 * div({className: "App"});
 *
 * function React.createElement(composant, properties, ...children) {
 *    const element = composant.isClass() ? new composant(Object.freeze(properties)) : composant(Object.freeze(properties));
 *    element.children = children;
 *    return element;
 * }
 *
 * return React.createElement(div, {className: "App"},
 *    React.createElement(header, {className: "App-header"},
 *        React.createElement(img, {src: logo, className: "App-logo", alt: "logo"}),
 *        React.createElement(p, {},
 *            "Edit ",
 *            React.createElement(code, {},
 *              "src/App.js"
 *            ),
 *            " and save to reload."
 *        ),
 *        React.createElement(a, {},
 *            "Learn React"
 *        )
 *    )
 * )
 *
 */

export default App;
