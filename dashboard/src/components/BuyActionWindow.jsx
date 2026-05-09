import React, { useContext } from "react";

import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <div className="buy-window">
      <div className="buy-window-content">
        <h3>Buy {uid}</h3>
        <p>The buy action window is now available.</p>
        <button className="close" onClick={generalContext.closeBuyWindow}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BuyActionWindow;