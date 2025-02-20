
const Hero = () => {
  const images = [
    "https://i.pinimg.com/736x/11/ef/4b/11ef4bab9f55f7f24d01bf1d4eec4055.jpg",
    "https://i.pinimg.com/736x/e6/32/f9/e632f9bfa914513430d52b0272468b26.jpg",
    "https://i.pinimg.com/736x/b4/8e/73/b48e7322273dc7cc59a5debf58177ca9.jpg",
    "https://i.pinimg.com/736x/d9/dc/8d/d9dc8d5b73986c927d3b33a518a4955b.jpg",
    "https://i.pinimg.com/736x/d9/0c/d3/d90cd36cd551fc9d6203fb24952aa531.jpg",
    "https://i.pinimg.com/736x/8e/6e/dc/8e6edca936c580cfcb5d146f70ea8436.jpg",
    "https://i.pinimg.com/736x/e5/99/58/e59958bd4d85af780b3af868b2fb4c07.jpg",
    "https://i.pinimg.com/736x/08/00/b2/0800b262eb9a2fb59ae6f35df8488623.jpg"
  ];

  return (
    <section className="hero-container">
      
      {/* Hero Content */}
      <div className="hero-content">
        <h1>Capturing the vibe,<br /> Freezing the moment</h1>
        <p>Specialized in nurturing amazing pictures and moments you would always remember</p>
        <a href="#" className="cta-button">Send Us A Message</a>
      </div>
      
      {/* Image Carousel */}
      <div className="carousel-container">
        <div className="carousel-track">
          {images.map((src, index) => (
            <div
              key={index}
              className="carousel-card"
              style={{ 
                transform: `rotateY(${index * (360 / images.length)}deg) translateZ(220px)`,
                margin: "0 10px"
              }}
            >
              <img src={src} alt={`Gallery ${index}`} className="carousel-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;