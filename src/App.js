import React from "react";
import Bank from "./components/Bank.js"
import "./App.css";

export default class App extends React.Component {

  render() {
    return (
      <>
        <header>Pursuit Bank</header>
        <Bank/>
      </>
    );
  }
}
