import { useState, useEffect } from "react";

const heroSlides = [
  {
    image: "https://i.pinimg.com/736x/ca/6e/60/ca6e6061106d9343a8a19aca933135e5.jpg",
    title: "Handcrafted with Love",
    description: "Discover our collection of beautifully handcrafted crochet items, made with care and attention to detail."
  },
  {
    image: "https://i.pinimg.com/736x/66/ac/72/66ac72e1f996d890da94d81b58c987e5.jpg", 
    title: "Elegance in Every Stitch",
    description: "Our crochet designs are crafted with precision, ensuring elegance and style in every piece."
  },
  {
    image: "https://i.pinimg.com/736x/03/fc/0e/03fc0ebbd6aaba5e32388bff29567d73.jpg",
    title: "Timeless Handmade Creations",
    description: "Explore unique handmade pieces that bring warmth and beauty to your life."
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const { image, title, description } = heroSlides[currentIndex];

  return (
    <div
      className="relative flex items-center justify-center min-h-screen md:h-[500px] bg-contain bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url('${image}')` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white opacity-20"></div>

      {/* Text Content */}
      <div className="relative text-center max-w-2xl px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-2">
          {description}
        </p>

        {/* Button */}
        <button className="mt-4 bg-pink-400 hover:bg-pink-500 text-white font-medium py-2 px-6 rounded-full shadow-md">
          Shop Now
        </button>
      </div>
    </div>
  );
}
