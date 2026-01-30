function Gallery() {
  return (
    <section className="gallery" id="portfolio">
      <h2>Portfolio</h2>
      <p>Some of our recent work.</p>

     <div className="gallery-grid">
  <div className="gallery-item">
    <img src="/images/photo1.jpg" alt="Work 1" />
  </div>
  <div className="gallery-item">
    <img src="/images/photo2.jpg" alt="Work 2" />
  </div>
  <div className="gallery-item">
    <img src="/images/photo3.jpg" alt="Work 3" />
  </div>
  <div className="gallery-item">
    <img src="/images/photo4.jpg" alt="Work 4" />
  </div>
  <div className="gallery-item">
    <img src="/images/photo5.jpg" alt="Work 5" />
  </div>
  <div className="gallery-item">
    <img src="/images/photo6.jpg" alt="Work 6" />
  </div>
</div>


    </section>
  );
}

export default Gallery;
