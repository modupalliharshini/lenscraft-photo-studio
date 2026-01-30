
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Capturing Moments That Matter</h1>
        <p>Professional photography for every special occasion.</p>

        <button
          className="hero-btn"
          onClick={() => navigate("/contact")}
        >
          Book a Session
        </button>
      </div>
    </section>
  );
}

export default Hero;

