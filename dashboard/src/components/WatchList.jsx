import React, { useContext } from "react";
import { watchlist } from "../data/data";
import DoughnutChart from "./DougnutChart";
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  const { openBuyWindow } = useContext(GeneralContext);

  const data = {
    labels: watchlist.map((stock) => stock.name),
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
      },
    ],
  };

  return (
    <aside className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock) => (
          <li key={stock.name} className="watchlist-item">
            <div className="watchlist-item-left">
              <span className="symbol">{stock.name}</span>
              <span className={`price ${stock.isDown ? "down" : "up"}`}>
                ₹{stock.price}
              </span>
            </div>
            <span className={`percent ${stock.isDown ? "down" : "up"}`}>
              {stock.percent}
            </span>

            {/* hover overlay (Buy/Sell/Analytics) */}
            <div className="actions">
              <span>
                <button
                  className="buy"
                  type="button"
                  onClick={() => openBuyWindow(stock.name)}
                >
                  Buy
                </button>
              </span>
              <span>
                <button className="sell" type="button" disabled>
                  Sell
                </button>
              </span>
              <span>
                <button className="action" type="button" disabled>
                  Analytics
                </button>
              </span>
            </div>
          </li>
        ))}
      </ul>

      <DoughnutChart data={data} />
    </aside>
  );
};

export default WatchList;


