import React, { useState, useMemo, useCallback } from "react";
import "./Gallery.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Images outside component
const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80&auto=format&fit=crop", category: "coffee" },
  { id: 2, src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80&auto=format&fit=crop", category: "dessert" },
  { id: 3, src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&auto=format&fit=crop", category: "coffee" },
  { id: 4, src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80&auto=format&fit=crop", category: "interior" },
  { id: 5, src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80&auto=format&fit=crop", category: "dessert" },
  { id: 6, src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80&auto=format&fit=crop", category: "coffee" },
  { id: 7, src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80&auto=format&fit=crop", category: "dessert" },
  { id: 8, src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80&auto=format&fit=crop", category: "interior" }
];

function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = useMemo(() => {
    return filter === "all"
      ? images
      : images.filter((img) => img.category === filter);
  }, [filter]);

  const handleFilter = useCallback((category) => {
    setFilter(category);
  }, []);

  const openLightbox = useCallback((src) => {
    setSelectedImage(src);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <div className="gallery-page">

      {/* SEO */}
      <Helmet>
        <title>Cafe Gallery | Coffee, Desserts & Interior Photos</title>
        <meta
          name="description"
          content="Explore our cafe gallery featuring premium coffee, delicious desserts and modern cafe interior ambience."
        />
        <meta
          name="keywords"
          content="cafe gallery, coffee photos, cafe interior, dessert photos, coffee shop gallery"
        />
      </Helmet>

      {/* HERO */}
      <section className="gallery-hero">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            onClick={() => handleFilter(cat)}
            className={filter === cat ? "active" : ""}
            aria-label={`Filter ${cat}`}
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
            transition={{ duration: 0.3 }}
            onClick={() => openLightbox(img.src)}
          >
            <img
              src={img.src}
              alt={`Cafe ${img.category}`}
              loading="lazy"
              decoding="async"
              width="400"
              height="250"
            />
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <motion.img
            src={selectedImage.replace("w=800", "w=1200")}
            alt="Cafe gallery preview"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            loading="eager"
          />
        </div>
      )}

    </div>
  );
}

export default React.memo(Gallery);