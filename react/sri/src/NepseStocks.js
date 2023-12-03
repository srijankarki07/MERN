import { useState } from "react";
import { STOCKS } from "./constants";

const NepseStocks = () => {
  const [stocks] = useState(STOCKS);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <p> STOCKS</p>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {stocks.map((s) => (
          /* <li key={s}>
            <strong>{s}:</strong> {s.securityName}
          </li>*/
          // <li key={s.securityId}>{s.securityName}</li>

          <li key={s}>
            <strong>Security Name:</strong> {s.securityName}
            <br />
            <strong>Symbol:</strong> {s.symbol}
            <br />
            <strong>Total Trade Quantity:</strong> {s.totalTradeQuantity}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NepseStocks;
