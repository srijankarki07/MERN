import "./App.css";
import FirstComponent from "./FirstComponent";
import NepseStocks from "./NepseStocks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SecondComponent from "./SecondComponent";
import CashFlowCalculator from "./CashFlowCalculator";
import { useState } from "react";
import BillingList from "./BillingLists";

function App() {
  const [whatToShow, setWhatToShow] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        {/* <p>Designed by Srijan</p> */}

        {whatToShow === "first" && (
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
        )}
        <input
          id="whatToShow"
          name="whatToShow"
          value={whatToShow}
          onChange={(e) => setWhatToShow(e.target.value)}
        />

        <button onClick={(e) => setWhatToShow("cashFlow")}>
          Cash Flow Calculator
        </button>

        <button onClick={(e) => setWhatToShow("nepseStocks")}>
          Nepse Stock
        </button>

        <button onClick={(e) => setWhatToShow("billinglist")}>
          Billing List
        </button>

        <button onClick={(e) => setWhatToShow("first")}>First Component</button>
        {whatToShow === "cashFlow" && <CashFlowCalculator />}
        {whatToShow === "nepseStocks" && <NepseStocks />}
        {whatToShow === "billinglist" && <BillingList />}

        <ToastContainer />
        {/* <SecondComponent /> */}
        {/* <CashFlowCalculator />
        <NepseStocks name="STOCKS" /> */}
      </header>
    </div>
  );
}

export default App;