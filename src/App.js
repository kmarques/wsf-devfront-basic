import React, { useState } from "react";
import "./App.css";
import Button from "./components/Lib/Button";
import Page from "./components/Page";

const buttons = [
  { variant: "rectangle", title: "Hello" },
  { onClick: (event) => console.log("world"), title: "World" },
  { variant: "rectangle", title: "I'm" },
  { onClick: (event) => alert("alive"), title: "alive" },
];

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
  const [theme, setTheme] = useState("dark");
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Button
        theme={theme}
        title={"theme: " + theme}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <Button
        theme={theme}
        title={"counter: " + counter}
        onClick={() => setCounter(counter + 1)}
      />
      {buttons.map((button) => (
        <Button key={button.title} theme={theme} {...button} />
      ))}
      <Page theme={theme} />
    </div>
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
