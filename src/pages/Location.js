import React from "react";
import { motion } from "framer-motion";
import "./Location.css";

function Location() {
  return (
    <div className="location-page">

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
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d609.1280099933679!2d77.50038125197838!3d23.241204306391722!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1772457989918!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Cafe Location"
          ></iframe>
        </motion.div>

      </section>
    </div>
  );
}

export default React.memo(Location);