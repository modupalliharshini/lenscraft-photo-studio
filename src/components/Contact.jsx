import { useLocation } from "react-router-dom";
import { useState } from "react";

function Contact() {
  const location = useLocation();

  const [service, setService] = useState(
    location.state?.selectedService || ""
  );

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Tell us about your event or project. We’ll get back to you within
            24 hours.
          </p>

          <div className="contact-details">
            <p><strong>LensCraft Studio</strong></p>
            <p>Email: contact@lenscraftstudio.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Hyderabad, India</p>
            <p>Working Hours: Mon – Sat, 9 AM – 7 PM</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" />

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select Service</option>
              <option value="Wedding Photography">Wedding Photography</option>
              <option value="Portrait Photography">Portrait Photography</option>
              <option value="Event Coverage">Event Coverage</option>
              <option value="Commercial Shoot">Commercial Shoot</option>
            </select>

            <textarea
              rows="5"
              placeholder="Tell us about your requirement"
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
