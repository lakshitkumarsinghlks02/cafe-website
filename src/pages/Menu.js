import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu-page">

      {/* Hero Section */}
      <section className="menu-hero">
        <h1>Our Signature Menu</h1>
        <p>Crafted with love, brewed to perfection ☕</p>
      </section>

      {/* Coffee Section */}
      <section className="menu-section">
        <h2>☕ Coffee</h2>

        <div className="menu-item">
          <div>
            <h3>Espresso <span className="badge">Popular</span></h3>
            <p>Rich, bold and intense single shot of premium roasted beans.</p>
          </div>
          <span className="price">₹120</span>
        </div>

        <div className="menu-item">
          <div>
            <h3>Cappuccino</h3>
            <p>Perfect blend of espresso, steamed milk and silky foam.</p>
          </div>
          <span className="price">₹180</span>
        </div>

        <div className="menu-item">
          <div>
            <h3>Caramel Latte</h3>
            <p>Espresso with steamed milk & caramel drizzle.</p>
          </div>
          <span className="price">₹220</span>
        </div>
      </section>

      {/* Bakery Section */}
      <section className="menu-section">
        <h2>🥐 Bakery & Snacks</h2>

        <div className="menu-item">
          <div>
            <h3>Chocolate Croissant</h3>
            <p>Flaky buttery pastry filled with dark chocolate.</p>
          </div>
          <span className="price">₹150</span>
        </div>

        <div className="menu-item">
          <div>
            <h3>Cheese Sandwich</h3>
            <p>Grilled sandwich loaded with mozzarella & fresh veggies.</p>
          </div>
          <span className="price">₹200</span>
        </div>
      </section>

      {/* Desserts */}
      <section className="menu-section">
        <h2>🍰 Desserts</h2>

        <div className="menu-item">
          <div>
            <h3>Chocolate Brownie</h3>
            <p>Warm gooey brownie served with vanilla ice cream.</p>
          </div>
          <span className="price">₹180</span>
        </div>

        <div className="menu-item">
          <div>
            <h3>New York Cheesecake</h3>
            <p>Classic creamy cheesecake with berry topping.</p>
          </div>
          <span className="price">₹240</span>
        </div>
      </section>

      {/* Cold Beverages */}
      <section className="menu-section">
        <h2>🥤 Cold Beverages</h2>

        <div className="menu-item">
          <div>
            <h3>Cold Coffee</h3>
            <p>Chilled coffee blended with ice cream.</p>
          </div>
          <span className="price">₹190</span>
        </div>

        <div className="menu-item">
          <div>
            <h3>Strawberry Smoothie</h3>
            <p>Fresh strawberries blended with yogurt and honey.</p>
          </div>
          <span className="price">₹210</span>
        </div>
      </section>

    </div>
  );
}

export default Menu;