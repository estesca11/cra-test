//import logo from './logo.svg';
//import './App.css';
import React, { Component } from "react";
import Button from "./button2";
import Box from "./Box1";

/*function App() {
  return (
    <div className="App">
      <TodoList />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <img src={largeImg} />
      <img srsc={smallImg} />
    </div>
  );
}*/
class App extends Component {
  render() {
    return (
      <div>
        <Button size="big" />
        <Button size="small" />
        <Box size="big" />
        <Box size="small" />
      </div>
    )
  }
}
export default App;
