import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./FirstComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Designed by Srijan</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's get connected
        </a>
        <FirstComponent name="Test" courseName="MERN" />
      </header>
    </div>
  );
}

export default App;
