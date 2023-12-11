import { useState } from "react";
import { STOCKS } from "./constants";

const BillingList = () => {
  const [entries, setEntries] = useState([]);
  const [particular, setParticular] = useState();
  const [rate, setRate] = useState("");
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <h1> Billing List</h1>
      <div className="bill-container">
        <span className="sn">SN</span>
        <span className="par">Particulars</span>
        <span className="rate">Rate</span>
        <span className="qty">Qty</span>
        <span className="total">Total</span>

        {entries.map((a, index) => (
          <div className="entry-item">
            <span>{index + 1}</span>
            <span>{a.particular}</span>
            <span>{a.rate}</span>
            <span>{a.quantity}</span>
            <span>{a.rate * a.quantity}</span>
          </div>
        ))}
        <div className="bill-input-container">
          <span>-</span>
          <select
            value={particular}
            onChange={(e) => setParticular(e.target.value)}
          >
            {STOCKS.map((s) => (
              <option key={s.securityId} value={`${s.securityName}${s.symbol}`}>
                {s.securityName} {s.symbol} {s.securityId}
              </option>
            ))}
          </select>
          <input
            id="rate"
            name="rate"
            placeholder="Enter rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />{" "}
          <input
            id="quantity"
            name="quantity"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button>Add Entry</button>
        </div>
        {/* <p>Total:{entries.reduce((a, v) => a + (v.rate * v.quantity, 0))}</p> */}
      </div>
    </div>
  );
};
export default BillingList;
