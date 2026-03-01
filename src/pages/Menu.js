import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu-container">
      <h1>Our Special Menu</h1>

      <div className="menu-grid">
        <div className="card">
          <img src="https://source.unsplash.com/300x200/?espresso" alt="" />
          <h3>Espresso</h3>
          <p>Strong & bold flavor</p>
          <span>₹120</span>
        </div>

        <div className="card">
          <img src="https://source.unsplash.com/300x200/?latte" alt="" />
          <h3>Latte</h3>
          <p>Rich & creamy delight</p>
          <span>₹160</span>
        </div>

        <div className="card">
          <img src="https://source.unsplash.com/300x200/?cake" alt="" />
          <h3>Chocolate Cake</h3>
          <p>Freshly baked daily</p>
          <span>₹200</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;