import React, { useState, useContext } from "react";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

// This component represents the buy action window where users can specify the quantity and price for a stock they want to buy. It also handles the logic for placing a new order by sending a POST request to the backend server. The component uses the GeneralContext to manage the state of the buy window and to close it when necessary.
const BuyActionWindow = ({ uid }) => {

  const { closeBuyWindow } = useContext(GeneralContext);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';

  const [stockQuantity, setStockQuantity] = useState(1);

  const [stockPrice, setStockPrice] = useState(0.0);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // The handleBuyClick function is called when the user clicks the "Buy" button. It sends a POST request to the backend server with the order details (name, quantity, price, and mode). If the order is placed successfully, it shows a success message and dispatches a custom event to notify the Orders component to refresh the list of orders. After a short delay, it hides the success message and closes the buy window.
  const handleBuyClick = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/newOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to place order");
      }

      const data = await response.json();
      console.log("Order placed successfully:", data);
      
      setShowSuccessMessage(true);
      
      // Dispatch custom event to notify Orders component to refresh
      window.dispatchEvent(new Event('orderPlaced'));
      
      setTimeout(() => {
        setShowSuccessMessage(false);
        closeBuyWindow();
      }, 2000);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <>
      {showSuccessMessage && (
        <div className="toast-notification success-toast">
          <div className="toast-content">
            <span className="toast-icon">✓</span>
            <span className="toast-message">Order placed successfully!</span>
          </div>
        </div>
      )}
      <div className="container" id="buy-window" draggable="true">
        <div className="buy-header">
          <h3>Place Order</h3>
          <p className="stock-symbol">{uid}</p>
        </div>
        <div className="regular-order">
          <div className="inputs">
            <div className="input-group">
              <label htmlFor="qty">Quantity</label>
              <input
                type="number"
                name="qty"
                id="qty"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
                min="1"
                placeholder="Enter quantity"
              />
            </div>
            <div className="input-group">
              <label htmlFor="price">Price (₹)</label>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                onChange={(e) => setStockPrice(e.target.value)}
                value={stockPrice}
                min="0"
                placeholder="Enter price"
              />
            </div>
          </div>

          <div className="order-summary">
            <div className="summary-row">
              <span>Total Value:</span>
              <span className="value">₹{(stockQuantity * stockPrice).toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Margin Required:</span>
              <span className="value margin">₹{(stockQuantity * stockPrice * 0.2).toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="btn btn-blue" onClick={handleBuyClick}>
            <span className="btn-icon">+</span> Buy Now
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default BuyActionWindow;
