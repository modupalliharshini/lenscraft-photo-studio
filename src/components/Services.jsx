import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const handleBookNow = (serviceName) => {
    navigate("/contact", {
      state: { selectedService: serviceName },
    });
  };

  return (
    <section className="services">
      <h2>Our Services</h2>
      <p className="services-subtitle">
        We offer a wide range of professional photography services tailored to your needs.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Wedding Photography</h3>
          <p>
            Capturing timeless moments with creativity and elegance, from intimate
            ceremonies to grand celebrations.
          </p>
          <button
            className="service-btn"
            onClick={() => handleBookNow("Wedding Photography")}
          >
            Book Now
          </button>
        </div>

        <div className="service-card">
          <h3>Portrait & Studio Shoots</h3>
          <p>
            Professional portraits designed to highlight personality, confidence,
            and authenticity.
          </p>
          <button
            className="service-btn"
            onClick={() => handleBookNow("Portrait Photography")}
          >
            Book Now
          </button>
        </div>

        <div className="service-card">
          <h3>Events & Corporate</h3>
          <p>
            High-quality coverage for corporate events, conferences, and special
            occasions.
          </p>
          <button
            className="service-btn"
            onClick={() => handleBookNow("Event Coverage")}
          >
            Book Now
          </button>
        </div>

        <div className="service-card">
          <h3>Commercial Photography</h3>
          <p>
            Creative visuals for brands, products, and marketing campaigns that
            stand out.
          </p>
          <button
            className="service-btn"
            onClick={() => handleBookNow("Commercial Shoot")}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
