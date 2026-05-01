import '../App.css';

const testimonialsData = [
  {
    name: "John Doe",
    review: "Great food and excellent service!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "The ambiance was wonderful, but the food was just okay.",
    rating: 3,
  },
  {
    name: "Emily Johnson",
    review: "I had a fantastic dining experience. Highly recommend!",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-wrapper">
      <h1 className="testimonial-title">Testimonials</h1>

      <div className="testimonial-container">
        {testimonialsData.map((item) => (
          <div className="testimonial-card" key={item.name}>
            <h4>{item.name}</h4>
            <p className="review">"{item.review}"</p>
            <p className="rating">{item.rating} ⭐</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;