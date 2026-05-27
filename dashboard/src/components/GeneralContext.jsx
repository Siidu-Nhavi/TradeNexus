import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

/**
 * GeneralContext - Global state context for dashboard
 * Contains:
 * - openBuyWindow: Opens the buy window with a specific stock
 * - closeBuyWindow: Closes the buy window
 */
const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

/**
 * GeneralContextProvider Component
 * Provides global state management for:
 * - isBuyWindowOpen: Boolean to track if buy window is open
 * - selectedStockUID: The stock symbol for which buy window is opened
 * - handleOpenBuyWindow: Function to open buy window with stock UID
 * - handleCloseBuyWindow: Function to close buy window
 * - Renders BuyActionWindow component conditionally
 */
export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  /**
   * Handle opening the buy window with specific stock
   * @param {string} uid - Stock symbol/UID to buy
   */
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  /**
   * Handle closing the buy window and reset selected stock
   */
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {/* Render buy window modal if isOpen is true */}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;