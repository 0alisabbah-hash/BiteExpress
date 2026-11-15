import React, { useState } from "react";

const OrderTracker = () => {
  const [orderId, setOrderId] = useState("");
  const [message, setMessage] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();
    if (orderId.length === 4 && !isNaN(orderId)) {
      setMessage("Your order is on the way!");
    } else {
      setMessage("Please enter 4 digits.");
    }
  };

  return (
    <div className="order-tracker">
      <h2>Track Your Order</h2>

      <form onSubmit={handleTrack}>
        <input
          type="text"
          maxLength="4"
          placeholder="Enter 4 digit ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />

        <button type="submit">Track</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default OrderTracker;
