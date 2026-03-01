import React from "react";
import "./HotEspresso.css";

const espressoItems = [
  {
    name: "Classic Espresso",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    desc: "Rich and bold traditional espresso shot."
  },
  {
    name: "Double Espresso",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    desc: "Strong double shot for true coffee lovers."
  },
  {
    name: "Ristretto",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    desc: "Short and intense espresso flavor."
  },
  {
    name: "Lungo",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    desc: "Smooth long-pull espresso."
  },
  {
    name: "Espresso Macchiato",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
    desc: "Espresso topped with a touch of milk foam."
  },
  {
    name: "Flat White Espresso",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    desc: "Velvety microfoam with espresso."
  }
];

const HotEspresso = () => {
  return (
    <div className="espresso-page">
      <h1>Hot Espresso Menu</h1>

      <div className="espresso-grid">
        {espressoItems.map((item, index) => (
          <div className="espresso-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotEspresso;