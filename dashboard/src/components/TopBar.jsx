import React from "react";
import Menu from "./Menu";

/**
 * TopBar Component
 * Displays the application header with:
 * - Market index information (NIFTY 50, SENSEX)
 * - Navigation menu for dashboard sections
 */
function TopBar() {
  return (
    <div className="topbar-container">
      {/* Market indices container showing live market data */}
      <div className="indices-container">
        {/* NIFTY 50 Index */}
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        
        {/* SENSEX Index */}
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      {/* Navigation menu for dashboard sections */}
      <Menu />
    </div>
  );
};

export default TopBar;