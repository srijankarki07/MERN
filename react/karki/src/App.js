import "./App.css";
// import FirstComponent from "./FirstComponent";
import NepseStocks from "./NepseStocks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SecondComponent from "./SecondComponent";
import CashFlowCalculator from "./CashFlowCalculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>Designed by Srijan</p> */}

        {/* <FirstComponent
          name="Test"
          courseName={"MERN"}
          age={23}
          isStudent={true}
          //objects
          details={{ address: "Kathmandu", bloodGroup: "O +" }}
          //array
          subjects={["mongodb", "ExpressJS", "ReactJS", "NodeJS"]}
          square={(x) => x * x}
        /> */}
        <ToastContainer />
        {/* <NepseStocks name="STOCKS" /> */}
        {/* <SecondComponent /> */}
        <CashFlowCalculator />
      </header>
    </div>
  );
}

export default App;
