function Gallery() {
  return (
    <section className="gallery" id="portfolio">
      <h2>Portfolio</h2>
      <p>Some of our recent work.</p>

      <div className="gallery-grid">
        <img src="/images/photo1.jpg" alt="Work 1" />
        <img src="/images/photo2.jpg" alt="Work 2" />
        <img src="/images/photo3.jpg" alt="Work 3" />
        <img src="/images/photo4.jpg" alt="Work 4" />
        <img src="/images/photo5.jpg" alt="Work 5" />
        <img src="/images/photo6.jpg" alt="Work 6" />
      </div>
    </section>
  );
}

export default Gallery;
