function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>LensCraft Studio</h3>
          <p>Professional photography for timeless moments.</p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: contact@lenscraftstudio.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Hyderabad, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LensCraft Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
