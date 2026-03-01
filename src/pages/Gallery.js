import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery-container">
      <h1>Our Cafe Moments</h1>

      <div className="gallery-grid">
        <img src="https://source.unsplash.com/400x400/?coffee-shop" alt="" />
        <img src="https://source.unsplash.com/400x400/?cafe-interior" alt="" />
        <img src="https://source.unsplash.com/400x400/?dessert" alt="" />
        <img src="https://source.unsplash.com/400x400/?barista" alt="" />
      </div>
    </div>
  );
}

export default Gallery;