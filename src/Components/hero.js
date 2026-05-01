import '../App.css';
import { useNavigate } from "react-router-dom";


function Hero() {
    const navigate = useNavigate(); // ✅ this was missing

  return (
  <section style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#495E57",
      minHeight: "360px",
      overflow: "hidden",
    }}>

      {/* Left — Text Content */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "16px",
        padding: "48px 56px",
      }}>

        <h1 style={{ color: "#F4CE14", fontSize: "3rem", lineHeight: 1.05 }}>
          Little Lemon
        </h1>

        <h2 style={{ color: "#FFFFFF", fontSize: "1.5rem", fontWeight: 400 }}>
          Chicago
        </h2>

        <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "0.92rem", lineHeight: 1.7, maxWidth: "320px" }}>
          We are a family owned Mediterranean restaurant, located on Maldove
          Street in Chicago, Illinois. We focus on traditional recipes served
          with a modern twist.
        </p>

        <button
        onClick={() => navigate("/booking")}
          style={{
            alignSelf: "flex-start",
            backgroundColor: "#F4CE14",
            color: "#2C2C2C",
            border: "none",
            padding: "14px 32px",
            borderRadius: "8px",
            fontSize: "0.95rem",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Reserve a Table
        </button>
      </div>

      {/* Right — Image */}
      <div style={{ flex: 1, height: "360px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=80"
          alt="Mediterranean dishes at Little Lemon Chicago"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

    </section>
  );
}

export default Hero;
