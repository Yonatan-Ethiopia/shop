import React from "react";
import "./ShimmerPlaceholder.css";

const ShimmerPlaceholder = ({ width = "100%", height = "200px", radius = "12px" }) => {
  return (
    <div
      className="shimmer-placeholder"
      style={{ width, height, borderRadius: radius }}
    ></div>
  );
};

export default ShimmerPlaceholder;
