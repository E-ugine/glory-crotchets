export default function Hero() {
    return (
      <div
        className="relative flex items-center justify-center min-h-screen md:h-[500px] bg-contain bg-center px-6"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/ca/6e/60/ca6e6061106d9343a8a19aca933135e5.jpg')",
        }}
      >
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-white opacity-50"></div>
  
        {/* Text Content */}
        <div className="relative text-center max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
            Handcrafted with Love
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-2">
            Discover our collection of beautifully handcrafted crochet items, made with
            care and attention to detail.
          </p>
  
          {/* Button */}
          <button className="mt-4 bg-pink-400 hover:bg-pink-500 text-white font-medium py-2 px-6 rounded-full shadow-md">
            Shop Now
          </button>
        </div>
      </div>
    );
  }
  