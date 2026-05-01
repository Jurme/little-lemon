import '../App.css';

const Testimonialcard = ({name,review,rating}) => {
  return (
    <>
    <section className="testimonial-section"
    style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        padding: "32px",
        color: "white",
      }}
   >
      <h4>{name}</h4>
      <p>{review}</p>
      <p>{rating}</p>
    </section>
    </>
  );
}

export default Testimonialcard;
