
const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1552358155-515e264cb8b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1698167219404-b2391c61966d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1735762020035-b01d8549a92e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1718433720603-326f60a3a7cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://plus.unsplash.com/premium_photo-1669704098858-8cd103f4ac2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1550047849-607ede6975fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNvbWVvbmUlMjBvbiUyMGV5ZWdsYXNzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHNvbWVvbmUlMjBvbiUyMGV5ZWdsYXNzJTIwYWZyaWNhbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1735762020040-06a024522b81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvbWVvbmUlMjBvbiUyMGV5ZWdsYXNzfGVufDB8fDB8fHww"
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