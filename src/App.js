import logo from './logo.svg';
import './App.css';
import smallImg from './small.png';
import largeImg from './large.png';

function App() {
  return (
    <div className="App">
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
}

export default App;
