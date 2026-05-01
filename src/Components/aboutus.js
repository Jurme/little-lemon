import '../App.css';

function Aboutus() {
  return (
    <section className="aboutus-section"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f9fdfc",
        minHeight: "420px",
        overflow: "hidden",
      }}
    >
      {/* Left Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "18px",
          padding: "48px 56px",
        }}
      >
        <h1
          style={{
            color: "#040300",
            fontSize: "3rem",
            lineHeight: 1.05,
          }}
        >
          About Us
        </h1>

        <h2
          style={{
            color: "#FFFFFF",
            fontSize: "1.5rem",
            fontWeight: 400,
          }}
        >
          Little Lemon • Chicago
        </h2>

        <p
          style={{
            color: "rgba(18, 1, 1, 0.82)",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            maxWidth: "420px",
          }}
        >
          Little Lemon is a family-owned Mediterranean restaurant built on passion,
          hospitality, and authentic flavors. Our chefs blend traditional recipes
          with modern presentation to create a memorable dining experience for every guest.
        </p>

        <p
          style={{
            color: "rgba(13, 1, 1, 0.72)",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            maxWidth: "420px",
          }}
        >
          From fresh ingredients to warm service, we believe every meal should feel
          like home. Whether you're joining us for lunch, dinner, or a celebration,
          we’re here to make it special.
        </p>
      </div>

      {/* Right Image */}
      <div
        style={{
          flex: 1,
          height: "420px",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80"
          alt="Little Lemon restaurant interior"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}

export default  Aboutus;