import React from "react";

/**
 * Summary Component
 * Displays account summary with:
 * - User greeting
 * - Equity section with margin and balance information
 * - Holdings section with P&L (Profit & Loss) and investment details
 */
const Summary = () => {
  return (
    <>
      {/* User greeting section */}
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      {/* Equity section - Margin and balance info */}
      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            {/* Available margin amount */}
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            {/* Used margin and opening balance */}
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Holdings section - Profit/Loss and investment info */}
      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            {/* Total P&L (Profit & Loss) with percentage change */}
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            {/* Current portfolio value and total investment */}
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;