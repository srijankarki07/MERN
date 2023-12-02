import "./App.css";
import FirstComponent from "./FirstComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Designed by Srijan</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's get connected
        </a>
        <FirstComponent
          name="Test"
          courseName={"MERN"}
          age={23}
          isStudent={true}
          //objects
          details={{ address: "Kathmandu", bloodGroup: "O +" }}
          //array
          subjects={["mongodb", "ExpressJS", "ReactJS", "NodeJS"]}
          square={(x) => x * x}
        />
      </header>
    </div>
  );
}

export default App;
