import React from "react";
import "./Menu.css";
import { motion } from "framer-motion";

function Menu() {
  return (
    <div className="menu-page">

      {/* HERO */}
      <section className="menu-hero">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover Our Menu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Crafted with passion. Served with perfection.
        </motion.p>
      </section>

      {/* MENU SECTION */}
      <section className="menu-section">
        <h2>☕ Coffee</h2>

        <div className="menu-grid">

          <motion.div
            className="menu-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3>Espresso</h3>
            <p>Rich bold shot of premium roasted beans.</p>
            <span>₹120</span>
            <button>Order Now</button>
          </motion.div>

          <motion.div
            className="menu-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Cappuccino</h3>
            <p>Perfect espresso with silky milk foam.</p>
            <span>₹180</span>
            <button>Order Now</button>
          </motion.div>

          <motion.div
            className="menu-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Caramel Latte</h3>
            <p>Sweet caramel blended with creamy milk.</p>
            <span>₹220</span>
            <button>Order Now</button>
          </motion.div>

        </div>
      </section>

      {/* DESSERT SECTION */}
      <section className="menu-section dark-section">
        <h2>🍰 Desserts</h2>

        <div className="menu-grid">

          <motion.div
            className="menu-card glass"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Chocolate Brownie</h3>
            <p>Warm brownie served with vanilla ice cream.</p>
            <span>₹180</span>
            <button>Order Now</button>
          </motion.div>

          <motion.div
            className="menu-card glass"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Cheesecake</h3>
            <p>Creamy New York style cheesecake.</p>
            <span>₹240</span>
            <button>Order Now</button>
          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default Menu;