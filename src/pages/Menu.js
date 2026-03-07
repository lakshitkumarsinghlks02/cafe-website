import React from "react";
import "./Menu.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function Menu() {
  const cardHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.98 }
  };

  return (
    <div className="menu-page">

      {/* SEO */}
      <Helmet>
        <title>Cafe Menu | Coffee, Breakfast & Desserts</title>
        <meta
          name="description"
          content="Explore our cafe menu featuring espresso, hazelnut latte, pancakes, desserts, smoothies and cold coffee. Freshly prepared with premium ingredients."
        />
        <meta
          name="keywords"
          content="cafe menu, coffee menu, espresso, hazelnut latte, pancakes, desserts, cold coffee"
        />
      </Helmet>

      {/* HERO */}
      <section className="menu-hero">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience Our Flavors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Where taste meets perfection ☕
        </motion.p>
      </section>

      {/* COFFEE SECTION */}
      <section className="menu-section">
        <h2>☕ Signature Coffee</h2>
        <div className="menu-grid">

          <motion.div className="menu-card" {...cardHover}>
            <h3>Espresso</h3>
            <p>Premium roasted beans with intense aroma.</p>
            <span>₹120</span>
            <p className="rating">⭐⭐⭐⭐☆</p>
            <button>Order Now</button>
          </motion.div>

          <motion.div className="menu-card" {...cardHover}>
            <h3>Hazelnut Latte</h3>
            <p>Creamy milk with sweet hazelnut flavor.</p>
            <span>₹240</span>
            <p className="rating">⭐⭐⭐⭐⭐</p>
            <button>Order Now</button>
          </motion.div>

          <motion.div className="menu-card" {...cardHover}>
            <h3>Mocha</h3>
            <p>Chocolate infused espresso delight.</p>
            <span>₹220</span>
            <p className="rating">⭐⭐⭐⭐☆</p>
            <button>Order Now</button>
          </motion.div>

        </div>
      </section>

      {/* BREAKFAST */}
      <section className="menu-section dark-section">
        <h2>🥞 Breakfast Specials</h2>
        <div className="menu-grid">

          <motion.div className="menu-card glass" {...cardHover}>
            <h3>Pancake Stack</h3>
            <p>Fluffy pancakes with maple syrup.</p>
            <span>₹260</span>
            <button>Order Now</button>
          </motion.div>

          <motion.div className="menu-card glass" {...cardHover}>
            <h3>Avocado Toast</h3>
            <p>Fresh avocado on multigrain bread.</p>
            <span>₹280</span>
            <button>Order Now</button>
          </motion.div>

        </div>
      </section>

      {/* DESSERTS */}
      <section className="menu-section">
        <h2>🍰 Desserts</h2>
        <div className="menu-grid">

          <motion.div className="menu-card" {...cardHover}>
            <h3>Chocolate Brownie</h3>
            <p>Warm brownie served with vanilla ice cream.</p>
            <span>₹180</span>
            <button>Order Now</button>
          </motion.div>

          <motion.div className="menu-card" {...cardHover}>
            <h3>Red Velvet Cake</h3>
            <p>Moist cake layered with cream cheese frosting.</p>
            <span>₹250</span>
            <button>Order Now</button>
          </motion.div>

        </div>
      </section>

      {/* COLD BEVERAGES */}
      <section className="menu-section dark-section">
        <h2>🥤 Cold Beverages</h2>
        <div className="menu-grid">

          <motion.div className="menu-card glass" {...cardHover}>
            <h3>Cold Coffee</h3>
            <p>Chilled coffee blended with ice cream.</p>
            <span>₹190</span>
            <button>Order Now</button>
          </motion.div>

          <motion.div className="menu-card glass" {...cardHover}>
            <h3>Mango Smoothie</h3>
            <p>Fresh mango blended with yogurt.</p>
            <span>₹210</span>
            <button>Order Now</button>
          </motion.div>

        </div>
      </section>

      {/* CHEF SPECIAL */}
      <section className="menu-section chef-special">
        <h2>👨‍🍳 Chef’s Special Combo</h2>
        <motion.div
          className="special-box"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Morning Bliss Combo</h3>
          <p>Hazelnut Latte + Pancake Stack + Brownie</p>
          <span className="combo-price">₹499 Only</span>
          <button>Order Combo</button>
        </motion.div>
      </section>

    </div>
  );
}

export default Menu;  