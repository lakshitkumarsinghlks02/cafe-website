import React, { useState } from "react";
import "./Gallery.css";
import { motion } from "framer-motion";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", category: "coffee" },
  { id: 2, src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814", category: "dessert" },
  { id: 3, src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085", category: "coffee" },
  { id: 4, src: "https://images.unsplash.com/photo-1551024601-bec78aea704b", category: "interior" },
  { id: 5, src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735", category: "dessert" },
  { id: 6, src: "https://images.unsplash.com/photo-1511920170033-f8396924c348", category: "coffee" },
  { id: 7, src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814", category: "dessert" },
  { id: 8, src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8", category: "interior" }
];

function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <div className="gallery-page">

      {/* HERO */}
      <section className="gallery-hero">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Gallery
        </motion.h1>
        <p>Moments, flavors & ambiance captured beautifully</p>
      </section>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        {["all", "coffee", "dessert", "interior"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={filter === cat ? "active" : ""}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* IMAGE GRID */}
      <div className="gallery-grid">
        {filteredImages.map((img) => (
          <motion.div
            key={img.id}
            className="gallery-card"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(img.src)}
          >
            <img
              src={img.src}
              alt="gallery"
              loading="lazy"
              width="400"
              height="300"
            />
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <motion.img
            src={selectedImage + "&w=1200&q=90"}
            alt="preview"
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
          />
        </div>
      )}

    </div>
  );
}

export default Gallery;