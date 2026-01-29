function Contact() {
  return (
    <section className="contact">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Tell us about your event or project. We’ll get back to you within 24 hours.
      </p>

      <div className="contact-container">
        {/* Left side */}
        <div className="contact-info">
          <h3>LensCraft Studio</h3>
          <p>Professional photography for timeless moments.</p>

          <div className="contact-details">
            <p><strong>Email:</strong> contact@lenscraftstudio.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> Hyderabad, India</p>
            <p><strong>Working Hours:</strong> Mon – Sat, 9 AM – 7 PM</p>
          </div>
        </div>

        {/* Right side */}
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" />

          <select required>
            <option value="">Select Service</option>
            <option>Wedding Photography</option>
            <option>Portrait Photography</option>
            <option>Event Coverage</option>
            <option>Commercial Shoot</option>
          </select>

          <textarea placeholder="Tell us about your requirement" rows="5"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
