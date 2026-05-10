import React, { useState, useContext } from "react";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

// This component represents the buy action window where users can specify the quantity and price for a stock they want to buy. It also handles the logic for placing a new order by sending a POST request to the backend server. The component uses the GeneralContext to manage the state of the buy window and to close it when necessary.
const BuyActionWindow = ({ uid }) => {

  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);

  const [stockPrice, setStockPrice] = useState(0.0);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // The handleBuyClick function is called when the user clicks the "Buy" button. It sends a POST request to the backend server with the order details (name, quantity, price, and mode). If the request is successful, it logs the response data; otherwise, it logs an error message. After placing the order, it calls closeBuyWindow to close the buy action window.

  //the reson to use fetch instead of axios is to avoid adding an extra dependency to the project and to utilize the built-in capabilities of JavaScript for making HTTP requests. Fetch provides a simple and modern interface for handling network requests, and it is widely supported in modern browsers. By using fetch, we can keep our codebase lightweight and avoid potential issues with third-party libraries while still achieving the desired functionality for placing orders.
  const handleBuyClick = async () => {
    try {
      const response = await fetch("http://localhost:5000/newOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to place order");
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
