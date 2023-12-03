import "./App.css";
import FirstComponent from "./FirstComponent";
import NepseStocks from "./NepseStocks";

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
        ></a>
        {/*<FirstComponent
          name="Test"
          courseName={"MERN"}
          age={23}
          isStudent={true}
          //objects
          details={{ address: "Kathmandu", bloodGroup: "O +" }}
          //array
          subjects={["mongodb", "ExpressJS", "ReactJS", "NodeJS"]}
          square={(x) => x * x}
  />*/}

        <NepseStocks name="STOCKS" />
      </header>
    </div>
  );
}

export default App;
