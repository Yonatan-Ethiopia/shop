import React from "react";
import "./OrderOverlay.css";

function OrderOverlay({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="order-overlay" onClick={onClose}>
      <div className="order-box" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="order-header">
          <img src={product.image} alt={product.name} className="order-thumb" />
          <div className="order-info">
            <h3>{product.name}</h3>
          </div>
          <div className="order-price">
            {product.price}
          </div>
        </div>

        {/* Form */}
        <form className="order-form">
          <div className="form-group">
            <input type="text" placeholder="Full Name" required />
            <span className="icon">👤</span>
          </div>

          <div className="form-group">
            <input type="tel" placeholder="Phone Number" required />
            <span className="icon">📞</span>
          </div>

          <div className="form-group">
            <input type="text" placeholder="City" required />
            <span className="icon">📍</span>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Address" required />
            <span className="icon">🏠</span>
          </div>

          <p className="notice">
            You must pay <strong>50%</strong> upfront as a confirmation fee.
          </p>

          <button type="submit" className="place-order">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderOverlay;
