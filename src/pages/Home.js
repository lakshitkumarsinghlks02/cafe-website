import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import React from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zxh71oc",
        "template_amb2vgy",
        form.current,
        "G4G96y6x2aE-op_wB"
      )
      .then(
        () => {
          alert("Thank you! We will contact you soon ☕");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <div>

      {/* SEO */}
      <Helmet>
        <title>Brew Haven Cafe | Best Coffee Cafe in Bhopal</title>
        <meta
          name="description"
          content="Brew Haven Cafe offers fresh espresso, cappuccino, cold coffee and snacks in Bhopal. Visit our cafe for cozy vibes and great coffee."
        />
        <meta
          name="keywords"
          content="best cafe in Bhopal, coffee shop Bhopal, espresso cafe, cappuccino, cold coffee"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section
        style={{
          height: "100vh",
          width: "100%",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <div>
          <h1 style={{ fontSize: "60px", fontWeight: "700" }}>
            Brew Haven Cafe ☕
          </h1>
          <p style={{ fontSize: "22px", marginTop: "20px" }}>
            Fresh Coffee. Cozy Vibes. Perfect Moments.
          </p>
          <button
            onClick={() => navigate("/menu")}
            style={{
              marginTop: "30px",
              padding: "14px 32px",
              borderRadius: "30px",
              border: "none",
              background: "#6f4e37",
              color: "white",
              cursor: "pointer",
            }}
          >
            Explore Menu
          </button>
        </div>
      </section>

      {/* OUR SPECIAL HIGHLIGHTS */}
      <section style={{ padding: "100px 10%", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "50px" }}>
          Our Special Highlights
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div>
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                alt="Signature Espresso Coffee"
                style={{
                  width: "100%",
                  maxHeight: "450px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
              <h3 style={{ marginTop: "25px", fontSize: "26px" }}>
                Signature Espresso
              </h3>
              <p style={{ marginTop: "10px", color: "#555" }}>
                Crafted from premium Arabica beans with bold aroma and rich crema.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
                alt="Modern Cafe Ambience"
                style={{
                  width: "100%",
                  maxHeight: "450px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
              <h3 style={{ marginTop: "25px", fontSize: "26px" }}>
                Cozy & Modern Ambience
              </h3>
              <p style={{ marginTop: "10px", color: "#555" }}>
                A warm, aesthetic environment perfect for meetings and relaxation.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section
        style={{
          padding: "100px 10%",
          background: "#111",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "60px" }}>
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          style={{ paddingBottom: "70px" }}
        >
          {[
            "Best coffee in Bhopal! Amazing ambience.",
            "Absolutely love the cappuccino here!",
            "Perfect place for evening hangouts.",
            "Friendly staff and quick service.",
            "Desserts are fresh and delicious.",
            "Modern interior with cozy vibe.",
            "Highly recommended for coffee lovers!",
            "My favorite cafe in the city!"
          ].map((review, index) => (
            <SwiperSlide key={index}>
              <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                <p style={{ fontSize: "20px", fontStyle: "italic" }}>
                  “{review}”
                </p>
                <h4 style={{ marginTop: "20px", color: "#3b82f6" }}>
                  ⭐⭐⭐⭐⭐
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* CONTACT SECTION */}
      {/* (rest of your code unchanged) */}

    </div>
  );
}

export default Home;