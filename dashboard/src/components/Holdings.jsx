import React,{useState,useEffect} from "react";
import { use } from "react";

function Holdings(){

  const [allHoldings,setAllHoldings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/allHoldings")
      .then((response) => response.json())
      .then((data) => setAllHoldings(data))
      .catch((error) => console.error("Error fetching holdings:", error));
  }, []);
  console.log(allHoldings);

  return (
    <>
      <h3 className="title">Holdings({allHoldings.length}) </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};



export default Holdings;