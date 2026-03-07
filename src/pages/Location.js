import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "./Location.css";

function Location() {
  return (
    <div className="location-page">

      {/* SEO */}
      <Helmet>
        <title>Brew Haven Cafe Location | Best Coffee Cafe in Bhopal</title>
        <meta
          name="description"
          content="Visit Brew Haven Cafe in Bhopal, Madhya Pradesh. Enjoy fresh coffee, desserts and cozy ambience. Get directions and find our cafe location easily."
        />
        <meta
          name="keywords"
          content="cafe in Bhopal, coffee shop Bhopal, cafe near me, Brew Haven Cafe location, coffee cafe address"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="location-hero">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Visit Our Location ☕
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Experience premium coffee and cozy ambience in the heart of the city.
        </motion.p>
      </section>

      {/* CONTENT SECTION */}
      <section className="location-content">

        {/* INFO CARD */}
        <motion.div
          className="location-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Brew Haven Cafe</h2>

          <div className="location-details">
            <p>📍 Bhopal, Madhya Pradesh</p>
            <p>📞 +91 9876543210</p>
            <p>📧 brewhaven@gmail.com</p>
            <p>🕒 Open Daily: 9:00 AM – 11:00 PM</p>
          </div>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="direction-btn"
          >
            Get Directions
          </a>
        </motion.div>

        {/* MAP */}
        <motion.div
          className="map-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.42891317043944!2d77.46568408556755!3d23.25010288088191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4395957b8a37%3A0xa469f9e703425b9!2sNothing%20Before%20Coffee%20-%20Indrapuri%2C%20Bhopal!5e1!3m2!1sen!2sin!4v1772460556166!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Brew Haven Cafe Location in Bhopal"
          ></iframe>
        </motion.div>

      </section>
    </div>
  );
}

export default React.memo(Location);